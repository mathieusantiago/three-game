import { useBox } from "@react-three/cannon";

const debug = true;

export function Test({ position, args }) {
  useBox(() => ({
    args,
    position,
    type: "Static",
  }));

  return (
    debug && (
      <mesh position={[0,1,0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshBasicMaterial transparent={false} color='red' opacity={1} wireframe />
      </mesh>
    )
  );
}