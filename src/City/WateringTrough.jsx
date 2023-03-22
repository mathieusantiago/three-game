import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const WateringTrough = () => {
  const ref = useRef();
  const glt = useGLTF("./models/WateringTrough.glb");
  const args = [0.8, 1, 2.5];
  useBox(() => ({ args, position: [-45.3, 0.25, -63.5] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[-45.3, 0.25, -63.5]} rotation-y={0.7}>
      <group name="Scene">
        <primitive object={glt.scene} scale={1.2} />
      </group>
    </group>
  );
};

export default WateringTrough;
