import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const WateringTrough = () => {
  const ref = useRef();
  const glt = useGLTF("./models/WateringTrough.glb");
  const args = [5, 3, 6];
  useBox(() => ({ args, position: [95, 0, -30] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[-45.3, 0.2, -63.5]} rotation-y={0.7}>
      <group name="Scene">
        <primitive object={glt.scene} scale={1.2} />
      </group>
    </group>
  );
};

export default WateringTrough;
