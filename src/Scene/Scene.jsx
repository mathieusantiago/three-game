import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Hero } from "../Models/Hero/Hero";
import { Ground } from "../Models/City/Ground/Ground";
import { Tree } from "../Models/City/Tree/Tree";
import { Mountain } from "../Models/City/Mountain/Mountain";
import { House } from "../Models/City/House/House";
import { Grass } from "../Models/City/Ground/Grass";
import { Physics } from "@react-three/cannon";
import { Test } from "../Models/Teste/Test";

export const Scene = () => {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([6, 3.9, 6.21]);
  const cameraRef = useRef();
  useEffect(() => {
    const keydownHandler = (e) => {
      if (e.key === "k") {
        // random is necessary to trigger a state change
        if (thirdPerson) setCameraPosition([6, 3.9, 6.21]);
        setThirdPerson(!thirdPerson);
      }
    };

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);
  // array of tree positions
  const TreePositions1 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [106, 0, x];
  });
  const TreePositions2 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [-110, 0, x];
  });
  const TreePositions3 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [x, 0, -110];
  });
  const TreePositions4 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [x, 0, 106];
  });
  // array of mountain positions
  const MountainPositions1 = Array.from({ length: 4 }, (_, index) => {
    const x = -150 + index * 92;
    return [-220, 0, x];
  });
  const MountainPositions2 = Array.from({ length: 4 }, (_, index) => {
    const x = -150 + index * 92;
    return [220, 0, x];
  });
  const MountainPositions3 = Array.from({ length: 4 }, (_, index) => {
    const x = -150 + index * 92;
    return [x, 0, 220];
  });
  const MountainPositions4 = Array.from({ length: 4 }, (_, index) => {
    const x = -150 + index * 92;
    return [x, 0, -220];
  });
  // array of house positions
  const HousePosition = [[-70, 0, -50]];
  const squareSize = 10;
  const startCoord = [-240, 0.001, -240];
  const spacing = 46.68;

  const GrassPosition = [];

  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      const x = startCoord[0] + i * spacing;
      const y = startCoord[1];
      const z = startCoord[2] + j * spacing;
      GrassPosition.push([x, y, z]);
    }
  }

  return (
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "/textures/sky2.hdr"}
        background={"both"}
      />
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPosition} fov={75} />
      {!thirdPerson && (
        <OrbitControls target={[-2.64, -0.71, 0.03]} />         
      )}
      <Physics>
        <Hero thirdPerson={thirdPerson} cameraRef={cameraRef}/>
        <House positions={HousePosition} rotation={Math.random()}/>
        <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions2} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>      <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions3} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>      <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions4} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Tree positions={TreePositions1} rotation={Math.random()}/>
        <Tree positions={TreePositions2} rotation={Math.random()}/>
        <Tree positions={TreePositions3} rotation={Math.random()}/>
        <Tree positions={TreePositions4} rotation={Math.random()}/>
        <Grass positions={GrassPosition} rotation={Math.random()} />
        <Ground />
      </Physics>
    </Suspense>
  );
};
