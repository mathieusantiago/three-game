import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Obstacle = ({ position, rotation }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/ShepherdsHouse.glb");
  const housedref = useRef();
  const args = [5, 7, 4];

  const [ref] = useBox(
    () => ({ args, position: [a+4, b+3.5, c+0.8]}),
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

export const ShepherdsHouse = ({ positions, rotation }) => {
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

