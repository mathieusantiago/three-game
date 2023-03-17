import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Obstacle = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/House.glb");
  const housedref = useRef();
  const args = [9, 10, 8];

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
          rotation-y={-9.40}
          position={position}
        >
          <meshStandardMaterial attach="material" />
        </Clone>
    </>
  );
};

export function HouseFarm({ positions, rotation }) {
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

