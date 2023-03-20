import { useBox } from "@react-three/cannon";
import { Clone, useGLTF } from "@react-three/drei";
import { useRef } from "react";


const PineTree = ({positions}) => {
    const glt = useGLTF('./models/RTS-glb/PineTrees.glb')
    const buil1dref = useRef();
    return (
      <>
      {positions.map((position, index) => {
        return (
          <Clone ref={buil1dref} key={index} object={glt.scene} scale={15} rotation-y={0} position={position}>
            <meshStandardMaterial attach="material" />
          </Clone>
        );
      })}
    </>
    );
};

export default PineTree;