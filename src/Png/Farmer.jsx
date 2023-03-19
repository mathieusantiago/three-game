import { useCompoundBody } from '@react-three/cannon';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { UseTypeWriter } from '../Controle/UseTypeWriter';
import { Track } from '../Sound/AmbientSound';

const Farmer = ({setDialog}) => {
    const ref = useRef()
    const glt = useGLTF('./models/Farmer.glb')
    const animations = useAnimations(glt.animations, glt.scene);
    const [collide, setCollide] = useState(false)
    const [startSound, setStartSound] = useState(false)
    
    useEffect(() => {
      const action1 = animations.actions["CharacterArmature|Idle"];
      const action2 = animations.actions["CharacterArmature|Interact"];

      const loopActions = () => {
        action2.fadeOut(1);
        action1.reset().fadeIn(0.5).play();
        if(collide){
          setStartSound(true)
          action1.reset().fadeOut(0.1).play();
          action2.reset().fadeIn(0.1).play();
          setDialog(  
            <div className="dalogHtml">
              <img src="/img/dialogWood.png" className="imageDialog" />
              <div className="dialog">
                <UseTypeWriter text="Bonjour, je suis François le fermier de la ville du Boisclair, je suis là pour vous aider." />
              </div>
            </div>
          )
          setTimeout(() => {
            setDialog('')
            setCollide(false)
            setStartSound(false)
          },7000)

        }
      }
      loopActions();
    }, [collide])

    const [body, api]  =useCompoundBody(
      () => ({
        shapes: [
          { args: [0.5], position: [0, 0.5, 0], type: 'Sphere' },
        ],
        onCollide: (e) => {
          setCollide(true)
        },
      }),
      useRef()
    )
    useFrame((_, delta) => {
      api.position.set(-70,0,-45);
    })
    return (
      <>
      <group ref={ref} dispose={null} position={[-70,0,-45]}>
        <group name="Scene" >
            <primitive object={glt.scene}/>
        </group>
      </group>
      <mesh castShadow >
        {startSound?(
          <Track position-z={0} loop={true} volume={0.319} url="/sounds/tchatcha.mp3" />
        ):""}
        
      </mesh>
      </>

    )
};

export default Farmer;