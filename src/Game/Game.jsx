import { Debug, useContactMaterial } from '@react-three/cannon'
import Floor from '../Floor/Floor'
// import Obstacles from './Obstacles'
import Player from '../Player/Player'
import { useControls } from 'leva'
import { Grass } from '../Floor/Grass'
import { Track } from '../Sound/AmbientSound'
import TownCenterSimpleRoc from '../City/TownCenterSimpleRoc'
import { useState } from 'react'
import { Html } from '@react-three/drei'
import TreeGroup from './TreeGroup/TreeGroup'
import MountainGroup from './MountainGroup/MountainGroup'
import FenceGroup from './FenceGroup/FenceGroup'
import PavedGroup from './PavedGroup/PavedGroup'
import FarmerHouseGroup from './FarmerHouseGroup/FarmerHouseGroup'
import ShepherdsGroup from './ShepherdsGroup/ShepherdsGroup'
import LumberJackGroup from './LumberJackGroup/LumberJackGroup'
import WellGroup from './WellGroup/WellGroup'
import MarketPlaceGroup from './MarketPlaceGroup/MarketPlaceGroup'
import HouseVilage1Group from './HouseVilage1Group/HouseVilage1Group'

const ToggleDebug = ({ children }) =>{
  const debugRendererVisible = useControls('Debug Renderer', { visible: true })

  return <>{debugRendererVisible.visible ? <Debug>{children}</Debug> : <>{children}</>}</>
}

const Game = () => {

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
        {/* html dialog PNG */}
        <Html>
          {Dialog}
        </Html>
        {/* City group */}
        <HouseVilage1Group/>
        <TownCenterSimpleRoc/>
        <TreeGroup/>
        <MountainGroup/>
        <FenceGroup/>
        <PavedGroup/>
        <WellGroup/>
        <MarketPlaceGroup/>
        <FarmerHouseGroup setDialog={setDialog}/>
        <ShepherdsGroup setDialog={setDialog}/>
        <LumberJackGroup setDialog={setDialog}/>
        {/* Player Hero */}
        <Player position={[10, 1, 10]} linearDamping={0.95} material={'slippery'} />
        {/* Floor */}
        <Grass positions={GrassPosition} rotation={Math.random()} />
        <Floor rotation={[-Math.PI / 2, 0, 0]} material={'ground'} />
        {/* Ambient Sound */}
        <Track position-z={0} url="/sounds/theBirdsForest.mp3" volume={'0.010'} />
        <Track position-z={0} url="/sounds/medievalmusic1hour.mp3" volume={'0.020'} />
      </ToggleDebug>
    </>
  )
}
export default Game