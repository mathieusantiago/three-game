import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Mountain = ({ positions, rotation, scale }) => {
  const glt = useGLTF('./models/Mountains.glb')
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={buil1dref} key={index} object={glt.scene} scale={scale} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]