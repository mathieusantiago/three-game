import React, { useRef } from "react";
import { Clone, useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
const Well = ({position, rotation}) => {
  const ref = useRef();
  const glt = useGLTF("./models/Well.glb");
  const args = [1.5, 5, 1.5];
  useBox(() => ({ args, position: position }), useRef());

  return (
    <Clone ref={ref}  object={glt.scene} scale={2.5} rotation-y={rotation} position={position}>
      <meshStandardMaterial attach="material" />
    </Clone>
  );
};

export default Well;
