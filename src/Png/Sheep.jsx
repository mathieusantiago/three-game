import { useCompoundBody } from '@react-three/cannon';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';

const Sheep = ({rotation=false}) => {
    const ref = useRef()
    const glt = useGLTF('./models/Sheep.glb')
    const animations = useAnimations(glt.animations, glt.scene);
    const [axeY, setAxeY] = useState(-55)
    const [axeX, setAxeX] = useState(-42)
    const [startForward, setStartForward] = useState(false)
    const [startDirection, setstartDirection] = useState(false)
  

    useEffect(() => {
      const action1 = animations.actions["Armature|Jump"];
      const action2 = animations.actions["Armature|Idle"];
      const actionDuration = 10000;
      
      let counter = 0;
      const loopActions = () => {
        action1.reset().fadeIn(0.5).play();
        rotation?setstartDirection(true):setstartDirection(false)
        setTimeout(() => {
          setStartForward(false)
          setstartDirection(false)
          action1.fadeOut(1);
          action2.reset().fadeIn(1).play();
          
          setTimeout(loopActions, actionDuration);
        }, actionDuration);
        counter++;
        if(counter === 3){
          setAxeY(-55)
          setAxeX(-42)
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
      api.position.set(axeX, 0.3, axeY + delta / 2);
      if (startForward){
        setAxeY(axeY + delta / 2)
      }
      if(startDirection){
        setAxeX(axeX + delta / 2)
      }
    })
    return (
      <group ref={ref} dispose={null} rotation-y={rotation?-23.5:0} position={[axeX,0,axeY]}>
        <group name="Scene" >
            <primitive object={glt.scene} scale={0.2}/>
        </group>
      </group>
    )
};

export default Sheep;