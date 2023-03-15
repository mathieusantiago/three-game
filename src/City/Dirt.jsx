import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Dirt = ({ positions, rotation }) => {
  const glt = useGLTF("./models/FloorTile.glb");
  const dirtDref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={dirtDref} key={index} object={glt.scene} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
};