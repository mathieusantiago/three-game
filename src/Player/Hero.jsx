import { useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { Track } from '../Sound/AmbientSound'

export default function Hero({ mixer, actions, useAnim }) {
  const ref = useRef()
  const glt = useGLTF('./models/Hero.glb')
  const animations = useAnimations(glt.animations, glt.scene);
  const [startSound, setStartSound] = useState(false)
  
  useEffect(() => {
      if (useAnim === false) {
        const action = animations.actions["CharacterArmature|Idle"];
        action.reset().fadeIn(0.5).play();
      }
      if (useAnim === "CharacterArmature|Run") {
        const action = animations.actions["CharacterArmature|Run"];
        action.reset().fadeIn(1).play();
        setStartSound(true)
      } else {
        const action = animations.actions["CharacterArmature|Run"];
        action.reset().fadeOut(1.5).play();
        setStartSound(false)
      }
  })

  return (
    <>
      <group ref={ref} dispose={null}>
        <group name="Scene">
            <primitive object={glt.scene} />
        </group>
      </group>
      <mesh>
          {startSound?(
            <Track position-z={0} loop={true} volume={0.019} url="/sounds/course.mp3" playbackRate={0.7}/>
          ):""}
          
      </mesh>
    </>
  )
}

useGLTF.preload(['./models/eve.glb'])
