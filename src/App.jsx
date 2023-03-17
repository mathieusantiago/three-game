import { Canvas } from '@react-three/fiber'
import { Stats, useProgress, Html, Environment } from '@react-three/drei'
import Game from './Game/Game'
import { Physics } from '@react-three/cannon'
import { Suspense, useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
function Loader() {
  const { progress } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
      setDisplayProgress(Math.round(progress * 15));
  }, [progress]);

  return(
    <Html center>
      <div className='barProgress'>
        <h1 className='text-warning'>LOADING {Math.round(progress)}%</h1>
        <ProgressBar variant="warning" label={`_________________________________________________________________Loading_________________________________________________________________`} now={Math.round(displayProgress)}/>
      </div>
    </Html>)
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
