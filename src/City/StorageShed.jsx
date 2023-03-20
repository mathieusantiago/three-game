import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Obstacle = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/StorageShed.glb");
  const housedref = useRef();
  const args = [9, 4, 8];

  const [ref] = useBox(
    () => ({ args, mass: 15000, position: [a, b+6, c]}),
    useRef()
  );
  return (
    <>
        <Clone
          ref={housedref}
          object={glt.scene}
          scale={8}
          rotation-y={-0}
          position={position}
        >
          <meshStandardMaterial attach="material" />
        </Clone>
    </>
  );
};

export function StorageShed({ positions, rotation }) {
  return (
    <>
      {positions.map((position, index) => (
        <Obstacle
          key={index}
          position={position}
        >
        </Obstacle>
      ))}
    </>
  );
}

