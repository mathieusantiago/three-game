import { useBox} from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "../../../AnimationController/useControls";
import  buildingGlb  from "../../../assets/Building.glb";

export function Building({ thirdPerson }) {
  let result = useLoader(
    GLTFLoader,
    buildingGlb
  )
  const buil1dref = useRef();
  return (
    <group ref={buil1dref} name="Building1">
      <primitive object={result.scene} rotation-y={25.11} position={[-50, 0, -50]}/>
    </group>
  );
}
