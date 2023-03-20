import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
const WoodPile = () => {
  const ref = useRef();
  const glt = useGLTF("./models/WoodPile.glb");
  const args = [5, 3, 6];
  useBox(() => ({ args, position: [95, 1.5, -30] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[95, 1.2, -30]}>
      <group name="Scene">
        <primitive object={glt.scene} scale={5} />
      </group>
    </group>
  );
};

export default WoodPile;
