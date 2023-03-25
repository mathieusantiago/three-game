import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Obstacle = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/HouseVilage.glb");
  const housedref = useRef();
  const args = [5, 7, 4];

  const [ref] = useBox(
    () => ({ args, position: [a-1, b+3.5, c-0.5]}),
    useRef()
  );
  return (
    <>
        <Clone
          ref={housedref}
          object={glt.scene}
          scale={8}
          rotation-y={0}
          position={position}
        >
          <meshStandardMaterial attach="material" />
        </Clone>
    </>
  );
};

export const HouseVilage1 = ({ positions, rotation }) => {
  return (
    <>
      {positions.map((position, index) => (
        <Obstacle
          key={index}
          rotation={rotation}
          position={position}
        >
        </Obstacle>
      ))}
    </>
  );
}

