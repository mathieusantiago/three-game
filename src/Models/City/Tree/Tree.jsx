import { useBox} from "@react-three/cannon";
import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "../../../AnimationController/useControls";
import  treeGlb  from "../../../assets/Trees.glb";

export function Tree({ positions, rotation }) {
  let gltf = useLoader(
    GLTFLoader,
    treeGlb
  )
  const buil1dref = useRef();
  return (
    <>
      {positions.map((position, index) => (
        <Clone key={index} object={gltf.scene} rotation-y={rotation} position={position}>
          <meshStandardMaterial attach="material" />
        </Clone>
      ))}
    </>
  );
}
//[-110, 0, -50]