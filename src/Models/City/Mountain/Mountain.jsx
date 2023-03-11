import { Clone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  mountainGlb  from "../../../assets/Mountains.glb";

export const Mountain = ({ positions, rotation, scale }) => {
  let gltf = useLoader(
    GLTFLoader,
    mountainGlb
  )
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={buil1dref} key={index} object={gltf.scene} scale={scale} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]