import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Mountain = ({ positions, rotation, scale }) => {
  const glt = useGLTF('./models/Mountains.glb')
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => {
      const a = position[0];
      const b = position[1];
      const c = position[2];
      const [ref, api] = useBox(() => ({
        args: [200, 110, 200],
        position: [a, b+54, c],
      }));
      return (
        <Clone ref={buil1dref} key={index} object={glt.scene} scale={scale} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      );
    })}
    </>
  );
}
