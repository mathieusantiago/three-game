import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const GrassYellowing = ({ positions, rotation }) => {
  const glt = useGLTF('./models/grassYellowing.glb')
  const grassYellowingref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={grassYellowingref} key={index} object={glt.scene} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}