import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  buildingGlb  from "../../../assets/House.glb";

export const Building = ({ thirdPerson }) => {
  let result = useLoader(
    GLTFLoader,
    buildingGlb
  )
  const buil1dref = useRef();
  return (
    <group ref={buil1dref} name="Building1">
      <primitive object={result.scene} rotation-y={25.11} scale={8} position={[-50, 0, -50]}/>
    </group>
  );
}
