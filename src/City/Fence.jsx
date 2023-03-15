import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Fence = ({ positions, rotation, args }) => {
  const glt = useGLTF("./models/Fence.glb");
  const fenceRef = useRef();
  return ( 
    <>
      {positions.map((position, index) => {
        const a = position[0];
        const b = position[1];
        const c = position[2];
          useBox(
            () => ({ args: args, mass: 15000, position: [a+0.1, b+1, c+0.0]}),
            useRef()
          );
        return (
          <Clone
            ref={fenceRef}
            key={index}
            object={glt.scene}
            position={position}
            rotation-y={rotation}
          >
            <meshStandardMaterial attach="material" />
          </Clone>
        );
      })}
    </>
  );
};
