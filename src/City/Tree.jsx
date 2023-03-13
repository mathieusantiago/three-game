import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";


export const Tree = ({ positions, rotation }) => {
  const glt = useGLTF('./models/Trees.glb')
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={buil1dref} key={index} object={glt.scene} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]