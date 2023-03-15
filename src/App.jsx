import { Canvas } from '@react-three/fiber'
import { Stats, useProgress, Html, Environment, OrbitControls } from '@react-three/drei'
import Game from './Game/Game'
import { Physics } from '@react-three/cannon'
import { Suspense, useState } from 'react'
import { Grass } from './Floor/Grass'
import { Tree } from "./City/Tree";
import { Mountain } from "./City/Mountain";
import { House } from './City/House'
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function App() {
  
  return (
    <>
      <Canvas shadows onPointerDown={(e) => e.target.requestPointerLock()}>
        <Suspense fallback={<Loader />}>
          <Environment
          files={process.env.PUBLIC_URL + "/img/sky2.hdr"}
          background={"both"}/>
          <spotLight position={[80, 5, 150]} angle={Math.PI / 3} penumbra={1} castShadow shadow-mapSize-height={2048} shadow-mapSize-width={2048} />
          <spotLight position={[-80, 5, 150]} angle={Math.PI / 3} penumbra={1} castShadow shadow-mapSize-height={2048} shadow-mapSize-width={2048} />
          <Physics>
            <Game/>
          </Physics>
          <Stats />
        </Suspense>
      </Canvas>
      <div id="instructions">
        WASD to move
        <br />
        Mouve mouse to look around
      </div>
    </>
  )
}
