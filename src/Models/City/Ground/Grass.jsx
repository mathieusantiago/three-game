import { Clone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  grassGlb  from "../../../assets/Grass.glb";

export const Grass = ({ positions, rotation }) => {
  let gltf = useLoader(
    GLTFLoader,
    grassGlb
  )
  const grassref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={grassref} key={index} object={gltf.scene} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]