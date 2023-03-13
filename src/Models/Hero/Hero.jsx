import { useBox, useCompoundBody } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "../../AnimationController/useControls";
import test from "../../assets/Hero.glb";

export const Hero = ({ thirdPerson }) => {
  
  let result = useLoader(GLTFLoader, test);

  const chassisBodyRef = useRef();
  const position = [0,1,0];
  const chassisBodyArgs =  [0.5, 2, 0.5];
  const [chassisBody] = useBox(
    () => ({
      type: "Dynamic",
      allowSleep: false,
      args: chassisBodyArgs,
      mass: 15,
      position,
      ref: chassisBodyRef,
    }),
    useRef(null)
  );

  useControls(result);

  useFrame((state) => {
    if (!thirdPerson) return;

    let position = new Vector3(0, 0, 0);
    position.setFromMatrixPosition(chassisBody.current.matrixWorld);

    let quaternion = new Quaternion(0, 0, 0, 0);
    quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

    let wDir = new Vector3(0, 0, 1);
    wDir.applyQuaternion(quaternion);
    wDir.normalize();

    let cameraPosition = position
      .clone()
      .add(
        result.scene.position
          .clone()
          .multiplyScalar(1)
          .add(new Vector3(0.2, 1.6, 4))
      );

    wDir.add(new Vector3(10, 0.2, 10));
    // console.log("result", cameraPosition);

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(result.scene.position);
  });
  
  return (
    <group name="HeroGroup">
      <group ref={chassisBody} name="Hero">
        <primitive object={result.scene} rotation-y={Math.PI} position={0} />
      </group>
      <mesh ref={chassisBody}>
        <boxGeometry  args={chassisBodyArgs}/>
        <meshBasicMaterial transparent={true} opacity={1} wireframe/>
      </mesh>
    </group>
  );
}