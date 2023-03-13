import { Debug, useContactMaterial } from '@react-three/cannon'
import Floor from '../Floor/Floor'
// import Obstacles from './Obstacles'
import Player from '../Player/Player'
import { useControls } from 'leva'
import { House } from '../City/House'
import { Mountain } from '../City/Mountain'
import { Tree } from '../City/Tree'
import { Grass } from '../Floor/Grass'

function ToggleDebug({ children }) {
  const debugRendererVisible = useControls('Debug Renderer', { visible: false })

  return <>{debugRendererVisible.visible ? <Debug>{children}</Debug> : <>{children}</>}</>
}

export default function Game() {
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
        <Floor rotation={[-Math.PI / 2, 0, 0]} material={'ground'} />
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
        <Player position={[0, 1, 0]} linearDamping={0.95} material={'slippery'} />
      </ToggleDebug>
    </>
  )
}
