import { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Hero({ mixer, actions, useAnim }) {
  const ref = useRef()
  const glt = useGLTF('./models/Hero.glb')
  const animations = useAnimations(glt.animations, glt.scene);

  
  useEffect(() => {
      if (useAnim === false) {
        const action = animations.actions["CharacterArmature|Idle"];
        action.reset().fadeIn(0.5).play();
      }
      if (useAnim === "CharacterArmature|Run") {
        const action = animations.actions["CharacterArmature|Run"];
        action.reset().fadeIn(1).play();
      } else {
        const action = animations.actions["CharacterArmature|Run"];
        action.reset().fadeOut(1).play();
      }
  })

  return (
    <group ref={ref} dispose={null}>
      <group name="Scene">
          <primitive object={glt.scene} />
      </group>
    </group>
  )
}

useGLTF.preload(['./models/eve.glb'])
