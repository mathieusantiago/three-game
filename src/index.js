import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene/Scene";
import { Physics } from "@react-three/cannon";
import { KeyboardControls } from "@react-three/drei";
const mapping = 
  [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
  ]

createRoot(document.getElementById("root")).render(
  <>
    <KeyboardControls
      map={mapping}
    >
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
    </KeyboardControls>
    <div className="controls">
      <p>press z s q d to move</p>
      <p>press k to swap camera</p>
    </div>
  </>
);
