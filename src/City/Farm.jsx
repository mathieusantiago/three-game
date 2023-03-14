import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Farm = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/Farm.glb");
  const cropsDref = useRef();
  const args1 = [2.8, 5, 2.8];
  const args2 = [0.4, 1, 3.6];
  const args3 = [3.6, 1, 0.4];
  useBox(
    () => ({ args:args1, mass: 15000, position: [a-2.5, b+6, c-3]}),
    useRef() 
  );
  useBox(
    () => ({ args:args2, mass: 15000, position: [a-3.9, b+1, c+0.4]}),
    useRef()
  );
  useBox(
    () => ({ args:args3, mass: 15000, position: [a+1.1, b+1, c-4.2]}),
    useRef()
  );
  return (
    <>
      <Clone ref={cropsDref} scale={5} object={glt.scene} position={position}>
        <meshStandardMaterial attach="material" />
      </Clone>
    </>
  );
};
