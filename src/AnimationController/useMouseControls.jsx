import { useEffect, useRef } from "react";

export const useMouseControls = (camera) => {
  const canvasRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { movementX, movementY } = event;

      const rotationSpeed = 0.002;

      camera.rotation.y -= movementX * rotationSpeed;
      camera.rotation.x -= movementY * rotationSpeed;

      // Limite la rotation de la caméra
      camera.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, camera.rotation.x)
      );
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera]);

  return canvasRef;
}
