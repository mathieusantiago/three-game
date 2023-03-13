import { useBox } from "@react-three/cannon";

const debug = false;

export function ColliderBox({ position, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={false} opacity={1} wireframe/>
      </mesh>
    )
  );
}
