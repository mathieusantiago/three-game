import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Hero } from "../Models/Hero/Car";
import { Building } from "../Models/City/Building/Building";
import { BuildingGroup } from "../Models/City/BuildingGroup";
import { Ground } from "../Models/City/Ground";

export function Scene() {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([6, 3.9, 6.21]);
  const cameraRef = useRef();
  useEffect(() => {
    function keydownHandler(e) {
      if (e.key === "k") {
        // random is necessary to trigger a state change
        if(thirdPerson) setCameraPosition([6, 3.9, 6.21]);
        setThirdPerson(!thirdPerson); 
      }
    }

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);

  return (
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "/textures/gothic.hdr"}
        background={"both"}
      />

      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPosition} fov={75} />
      {!thirdPerson && (
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
      )}
      <Hero thirdPerson={thirdPerson} cameraRef={cameraRef}/>
      <BuildingGroup />
      <Ground />
    </Suspense>
  );
}
