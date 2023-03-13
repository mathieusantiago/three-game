import { Clone, useGLTF } from "@react-three/drei";

import { useRef } from "react";


export const Grass = ({ positions, rotation }) => {
  const glt = useGLTF('./models/Grass.glb')
  const grassref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={grassref} key={index} object={glt.scene} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}