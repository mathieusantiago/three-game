import { useBox} from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "../../../AnimationController/useControls";
import  buildingGlb  from "../../../assets/Building2.glb";

export function Building2({ thirdPerson }) {
  let result = useLoader(
    GLTFLoader,
    buildingGlb
  )
  const buil2dref = useRef();
  return (
    <group ref={buil2dref} name="Building2">
      <primitive object={result.scene} rotation-y={25.11} position={[-20, 0, -30]}/>
    </group>
  );
}
