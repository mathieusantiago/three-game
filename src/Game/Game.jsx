import { Debug, useContactMaterial } from '@react-three/cannon'
import Floor from '../Floor/Floor'
// import Obstacles from './Obstacles'
import Player from '../Player/Player'
import { useControls } from 'leva'
import { House } from '../City/House'
import { Mountain } from '../City/Mountain'
import { Tree } from '../City/Tree'
import { Grass } from '../Floor/Grass'
import { Dirt } from '../City/Dirt'
import { Farm } from '../City/Farm'
import { Track } from '../Sound/AmbientSound'
import { Crops } from '../City/Crops'
import { Fence } from '../City/Fence'
import Shiba from '../Png/Shiba'
import TownCenterSimpleRoc from '../City/TownCenterSimpleRoc'
import Farmer from '../Png/Farmer'
import { useEffect, useState } from 'react'
import { Html } from '@react-three/drei'
import { Image } from 'react-bootstrap'
import WoodenSign from '../City/WoodenSign'

function ToggleDebug({ children }) {
  const debugRendererVisible = useControls('Debug Renderer', { visible: false })

  return <>{debugRendererVisible.visible ? <Debug>{children}</Debug> : <>{children}</>}</>
}

export default function Game() {
  const [Dialog, setDialog] = useState(<div></div>)

  useContactMaterial('ground', 'slippery', {
    friction: 0,
    restitution: 0.3,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 3
  })
  const squareSize = 10;
  const startCoord = [-240, 0.001, -240];
  const spacing = 46.68;
  const GrassPosition = [];
  const HousePosition = [[-70, 0, -50]];

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
  const DirtYPositions1 = Array.from({ length: 6 }, (_, index) => {
    const x = -68 + index * 2.0;
    return [x, -0.09, -35];
  });
  const DirtXPositions1 = Array.from({ length: 6 }, (_, index) => {
    const x = -45 + index * 2.0;
    return [-70, -0.09, x];
  });
  const CropsPositions1 = Array.from({ length: 1 }, (_, index) => {
    const x = -61.3 + index * 2.0;
    return [-70, -0.09, x];
  });
  const FencePositions1 = Array.from({ length: 1 }, (_, index) => {
    const x = -74.81 + index * 2.0;
    return [x, -0.01, -59.8];
  });
  const FencePositions2 = Array.from({ length: 1 }, (_, index) => {
    const x = -65.2 + index * 2.0;
    return [x, -0.01, -69.2];
  });  
  const FencePositions3 = Array.from({ length: 1 }, (_, index) => {
    const x = -62.12 + index * 2.0;
    return [x, -0.01, -66.34];
  });
  const FencePositions4 = Array.from({ length: 1 }, (_, index) => {
    const x = -62 + index * 2.0;
    return [x, -0.01, -60.45];
  });
  const FencePositions5 = Array.from({ length: 1 }, (_, index) => {
    const x = -61.88 + index * 2.0;
    return [x, -0.01, -54.57];
  });
 
  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      const x = startCoord[0] + i * spacing;
      const y = startCoord[1];
      const z = startCoord[2] + j * spacing;
      GrassPosition.push([x, y, z]);
    }
  }
  return (
    <>
      <ToggleDebug>
        <Html>
          {Dialog}
        </Html>
        <WoodenSign positions={[[-66,0,-45]]} rotation={0}/>
        <Shiba setDialog={setDialog}/>
        <Farmer setDialog={setDialog}/>
        <Fence positions={FencePositions1} rotation={-20.40} args={[0.4, 1, 5.6]}/>
        <Fence positions={FencePositions2}rotation={0} args={[5.6, 1, 0.4]}/>
        <Fence positions={FencePositions3}rotation={-20.40} args={[0.4, 1, 5.6]}/>
        <Fence positions={FencePositions4}rotation={-20.40} args={[0.4, 1, 5.6]}/>
        <Fence positions={FencePositions5}rotation={-20.40} args={[0.4, 1, 5.6]}/>
        <Farm position={[-71, -0.09, -65]}/>
        <Crops positions={CropsPositions1}/> 
        <House positions={HousePosition} rotation={Math.random()}/>
        <TownCenterSimpleRoc/>
        <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions2} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>      <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions3} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>      <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Mountain positions={MountainPositions4} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        <Tree positions={TreePositions1} rotation={Math.random()}/>
        <Tree positions={TreePositions2} rotation={Math.random()}/>
        <Tree positions={TreePositions3} rotation={Math.random()}/>
        <Tree positions={TreePositions4} rotation={Math.random()}/>
        <Dirt positions={DirtXPositions1}/>
        <Dirt positions={DirtYPositions1}/>
        <Player position={[0, 1, 0]} linearDamping={0.95} material={'slippery'} />
        <Grass positions={GrassPosition} rotation={Math.random()} />
        <Floor rotation={[-Math.PI / 2, 0, 0]} material={'ground'} />
        <Track position-z={0} url="/sounds/theBirdsForest.mp3" />
      </ToggleDebug>
    </>
  )
}
