import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
const SawmillSaw = () => {
  const ref = useRef();
  const glt = useGLTF("./models/SawmillSaw.glb");
  const args = [3, 1, 1];
  useBox(() => ({ args, position: [65,0.5, -45] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[65, 0, -45]}>
      <group name="Scene">
        <primitive object={glt.scene} scale={2} rotation-y={-1.6} />
      </group>
    </group>
  );
};

export default SawmillSaw;
