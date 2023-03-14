import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";


export const Tree = ({ positions, rotation }) => {
  const glt = useGLTF('./models/Trees.glb')
  const buil1dref = useRef();

  return (
    <>
    {positions.map((position, index) => {
      const a = position[0];
      const b = position[1];
      const c = position[2];
      const [ref, api] = useBox(() => ({
        args: [1, 15, 1],
        position: [a, b+7.5, c],
      }));
      return (
        <Clone ref={buil1dref} key={index} object={glt.scene} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      );
    })}
  </>
  );
}
//[-110, 0, -50]