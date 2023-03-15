import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { CanvasTexture } from "three";

const WoodenSign = ({ positions, rotation }) => {
  const glt = useGLTF("./models/WoodenSign.glb");
  const Signdref = useRef();

  const textCanvas = document.createElement("canvas");
  const textContext = textCanvas.getContext("2d");
  textCanvas.width = 266;
  textCanvas.height = 128;
  textContext.font = "bold 20px Arial";
  textContext.fillStyle = "black";
  textContext.fillText("Maison de", 10, 40);
  textContext.fillText("François", 20, 70);
  textContext.fillText("le Fermier", 15, 100);
  const textTexture = new CanvasTexture(textCanvas);

  return (
    <>
      {positions.map((position, index) => {
        const a = position[0];
        const b = position[1];
        const c = position[2];
        const [ref, api] = useBox(() => ({
          args: [1, 3, 0.5],
          position: [a, b, c],
        }));

        return (
          <group key={index} position={position}>
            <Clone
              ref={Signdref}
              object={glt.scene}
              rotation-y={rotation}
              scale={0.7}
            >
              <meshStandardMaterial attach="material" />
            </Clone>
            <mesh position={[0.6, 1.2, 0]}>
              <planeBufferGeometry args={[2, 0.5]} />
              <meshBasicMaterial map={textTexture} transparent={true} />
            </mesh>
          </group>
        );
      })}
    </>
  );
};

export default WoodenSign;