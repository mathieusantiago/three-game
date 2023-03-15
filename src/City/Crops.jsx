import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Crops = ({ positions, rotation }) => {
    console.log(positions);
  const glt = useGLTF("./models/RTS-glb/Crops.glb");
  const cropsRef = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={cropsRef} key={index} object={glt.scene} scale={5} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
};
