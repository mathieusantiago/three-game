import { useEffect, useRef } from "react"
import { Object3D } from "three"
import { suspend } from 'suspend-react'
import { useFrame } from "@react-three/fiber"

async function createAudio(url) {
    
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const source = context.createBufferSource()
    
    source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
    source.loop = true
    source.start(0)
    
    const gain = context.createGain()
    const analyser = context.createAnalyser()
    
    analyser.fftSize = 64
    source.connect(analyser)
    gain.gain.value = 0.009
    analyser.connect(gain)
    
    const data = new Uint8Array(analyser.frequencyBinCount)
    
    return {
      context,
      source,
      gain,
      data,
      update: () => {
        analyser.getByteFrequencyData(data)
        return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
      },
    }
  }

  
export function Track({ url, y = 2500, space = 1.8, width = 0.01, height = 0.05, obj = new Object3D(), ...props }) {
    const ref = useRef()
    const { gain, context, update, data } = suspend(() => createAudio(url), [url])
    
    useEffect(() => {
      gain.connect(context.destination)
      return () => gain.disconnect()
    }, [gain, context])
  
    useFrame((state) => {
      let avg = update()

      for (let i = 0; i < data.length; i++) {
        obj.position.set(i * width * space - (data.length * width * space) / 2, data[i] / y, 0)
        obj.updateMatrix()
        ref.current.setMatrixAt(i, obj.matrix)
      }
      ref.current.material.color.setHSL(avg / 500, 0.75, 0.75)
      ref.current.instanceMatrix.needsUpdate = true
    })
    return (
      <instancedMesh castShadow ref={ref} args={[null, null, data.length]} {...props}>
        <planeGeometry args={[0, 0]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    )
  }