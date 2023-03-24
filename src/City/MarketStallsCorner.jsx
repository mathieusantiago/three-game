import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const MarketStallsCorner = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/MarketStallsCorner.glb");
  const cropsDref = useRef();
  const args1 = [4.5, 3, 2.8];
  const args2 = [2.5, 3, 2.8];
  const args3 = [2.5, 3, 2.8];
  useBox(
    () => ({ args:args1, position: [a-2.5, b+1.5, c-3.5]}),
    useRef() 
  );
  useBox(
    () => ({ args:args2, position: [a-3.6, b+1.5, c+0.0]}),
    useRef()
  );
  useBox(
    () => ({ args:args3, position: [a+2.8, b+1.5, c+3.2]}),
    useRef()
  );
  return (
    <>
      <Clone ref={cropsDref} scale={5} object={glt.scene} rotation-y={rotation} position={position}>
        <meshStandardMaterial attach="material" />
      </Clone>
    </>
  );
};