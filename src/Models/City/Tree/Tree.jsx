import { Clone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  treeGlb  from "../../../assets/Trees.glb";

export const Tree = ({ positions, rotation }) => {
  let gltf = useLoader(
    GLTFLoader,
    treeGlb
  )
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone ref={buil1dref} key={index} object={gltf.scene} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]