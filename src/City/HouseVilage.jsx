import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Obstacle = ({ position, rotation, boxPosition }) => {
  const a = position[0];
  const b = position[1];
  const c = position[2];
  const glt = useGLTF("./models/RTS-glb/HouseVilage.glb");
  const housedref = useRef();
  const args = [5, 7, 4];
  console.log(boxPosition)
  const aB = boxPosition[0];
  const bB = boxPosition[1];
  const cB = boxPosition[2];
  const [ref] = useBox(
    () => ({ args, position: [a-aB, b+bB, c-cB]}),
    useRef()
  );
  return (
    <>
        <Clone
          ref={housedref}
          object={glt.scene}
          scale={8}
          rotation-y={rotation}
          position={position}
        >
          <meshStandardMaterial attach="material" />
        </Clone>
    </>
  );
};

export const HouseVilage1 = ({ positions, rotation, boxPosition }) => {
  return (
    <>
      {positions.map((position, index) => (
        <Obstacle
          key={index}
          rotation={rotation}
          position={position}
          boxPosition={boxPosition}
        >
        </Obstacle>
      ))}
    </>
  );
}

