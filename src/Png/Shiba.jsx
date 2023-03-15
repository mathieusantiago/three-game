import { useCompoundBody } from '@react-three/cannon';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';

const Shiba = () => {
    const ref = useRef()
    const glt = useGLTF('./models/Shiba.glb')
    const animations = useAnimations(glt.animations, glt.scene);
    const [axeY, setAxeY] = useState(-69)
    const [startForward, setStartForward] = useState(true)

    useEffect(() => {
      const action1 = animations.actions["AnimalArmature|Walk"];
      const action2 = animations.actions["AnimalArmature|Eating"];
      const actionDuration = 10000;
      
      let counter = 0;
      const loopActions = () => {
        action2.fadeOut(1);
        action1.reset().fadeIn(0.5).play();
        setStartForward(true)
        setTimeout(() => {
          setStartForward(false)
          action1.fadeOut(1);
          action2.reset().fadeIn(1).play();
          
          setTimeout(loopActions, actionDuration);
        }, actionDuration);
        counter++;
        console.log(counter)
        if(counter === 4){
          setAxeY(-69)
          counter = 0
        }
      }
      loopActions();
    }, [])
    const [body, api]  =useCompoundBody(
      () => ({
        mass: 5000,
        shapes: [
          { args: [0.4], position: [0, 0, 0], type: 'Sphere' },
          { args: [0.2], position: [0, 0.5, 0], type: 'Sphere' },
        ],
      }),
      useRef()
    )
    useFrame((_, delta) => {
      api.position.set(-64, 0.3, axeY + delta);
      if (startForward){
        setAxeY(axeY + delta / 2)
      }
    })
    return (
      <group ref={ref} dispose={null} position={[-64,0,axeY]}>
        <group name="Scene" >
            <primitive object={glt.scene} scale={0.2}/>
        </group>
      </group>
    )
};

export default Shiba;