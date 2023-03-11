import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Ground = () => {
  usePlane(
    () => ({ 
      type: 'Static', 
      rotation: [-Math.PI / 2, 0, 0] }
    ), 
    useRef(null)
  );

  const meshRef = useRef(null);
  const meshRef2 = useRef(null);

  useEffect(() => {
    if (!meshRef.current) return;

    var uvs = meshRef.current.geometry.attributes.uv.array;
    meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));

    var uvs2 = meshRef2.current.geometry.attributes.uv.array;
    meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));
  }, [meshRef.current]);

  return (
    <>
      <mesh
        ref={meshRef2}
        position={[-2.285, -0.01, -1.325]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[480, 480]} />
        <meshBasicMaterial
          opacity={1}
          transparent={false}
          color={"white"}
          map={useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/grain.jpg")}
        />
      </mesh>
    </>  
  ); 
}