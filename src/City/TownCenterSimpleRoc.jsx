import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
const TownCenterSimpleRoc = () => {
  const ref = useRef();
  const glt = useGLTF("./models/RTS-glb/TownCenterSimpleRoc.glb");
  const args = [8, 6, 8];
  useBox(() => ({ args, mass: 15000, position: [5, 2, 0] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[5, 0, 0]}>
      <group name="Scene">
        <primitive object={glt.scene} scale={5} />
      </group>
    </group>
  );
};

export default TownCenterSimpleRoc;
