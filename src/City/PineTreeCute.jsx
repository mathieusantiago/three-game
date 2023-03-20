import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";


const PineTreeCute = ({positions}) => {
    const glt = useGLTF('./models/RTS-glb/TreesCut2.glb')
    const buil1dref = useRef();

    return (
      <>
      {positions.map((position, index) => {
          const a = position[0];
          const b = position[1];
          const c = position[2];
          const [ref, api] = useBox(() => ({
            args: [4, 2, 10],
            position: [a, b+1, c+4],
          }));
        return (
          <Clone ref={buil1dref} key={index} object={glt.scene} scale={8} rotation-y={0} position={position}>
            <meshStandardMaterial attach="material" />
          </Clone>
        );
      })}
    </>
    );
};

export default PineTreeCute;