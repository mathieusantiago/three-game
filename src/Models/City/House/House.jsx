import { Clone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  houseGlb  from "../../../assets/House.glb";

export const House = ({ positions, rotation }) => {
  let gltf = useLoader(
    GLTFLoader,
    houseGlb
  )
  const housedref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={housedref} key={index} object={gltf.scene} scale={8} rotation-y={25.11} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]