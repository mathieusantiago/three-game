import { useRef } from 'react'
import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Floor(props) {
  const [ref] = usePlane(() => ({ ...props }), useRef())

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[480, 480]} />
      <meshStandardMaterial />
    </mesh>
  )
}
