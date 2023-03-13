import { useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Box3 } from "three";

export const useControls = (hero, chassisApi) => {
  let [controls, setControls] = useState({});
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);
  const [leftward, setLeftward] = useState(false);
  const [rightward, setRightward] = useState(false);
  const animations = useAnimations(hero.animations, hero.scene);
  const [sub, get] = useKeyboardControls();

  // Initialize the collision box
  const collisionBox = new Box3().setFromObject(hero.scene);

  useEffect(() => {
    return sub(
      (state) => {
        return state.forward;
      },
      (pressed) => {
        if (pressed) {
          const action = animations.actions["CharacterArmature|Run"];
          action.reset().fadeIn(0.5).play();
          setForward(true);
        } else {
          const action = animations.actions["CharacterArmature|Run"];
          action.reset().fadeOut(0.5).play();
          setForward(false);
        }
      }
    );
  }, [animations.actions, sub, get]);

  useEffect(() => {
    return sub(
      (state) => state.backward,
      (pressed) => {
        if (pressed) {
          const action = animations.actions["CharacterArmature|Run_Back"];
          action.reset().fadeIn(0.5).play();
          setBackward(true);
        } else {
          const action = animations.actions["CharacterArmature|Run_Back"];
          action.reset().fadeOut(0.5).play();
          setBackward(false);
        }
      }
    );
  }, [animations.actions, sub, get]);

  useEffect(() => {
    return sub(
      (state) => state.leftward,
      (pressed) => {
        if (pressed) {
          const action = animations.actions["CharacterArmature|Run_Left"];
          action.reset().fadeIn(0.5).play();
          setLeftward(true);
        } else {
          const action = animations.actions["CharacterArmature|Run_Left"];
          action.reset().fadeOut(0.5).play();
          setLeftward(false);
        }
      }
    );
  }, [animations.actions, sub, get]);
  useEffect(() => {
    return sub(
      (state) => state.rightward,
      (pressed) => {
        if (pressed) {
          const action = animations.actions["CharacterArmature|Run_Right"];
          action.reset().fadeIn(0.5).play();
          setRightward(true);
        } else {
          const action = animations.actions["CharacterArmature|Run_Right"];
          action.reset().fadeOut(0.5).play();
          setRightward(false);
        }
      }
    );
  }, [animations.actions, sub, get]);

  useEffect(() => {
    return sub(
      (state) => {
        if (
          !state.forward &&
          !state.backward &&
          !state.leftward &&
          !state.rightward
        ) {
          return true;
        }
      },
      (pressed) => {
        if (pressed) {
          const action = animations.actions["CharacterArmature|Idle"];
          action.reset().fadeIn(0.5).play();
        } else {
          const action = animations.actions["CharacterArmature|Idle"];
          action.reset().fadeOut(0.5).play();
        }
      }
    );
  }, [animations.actions, sub, get]);

  useFrame((state, delta) => {
    const speed = 6;
    const distance = speed * delta;
    if (forward) {
      hero.scene.position.z -= distance;
    }
    if (backward) {
      hero.scene.position.z += distance;
    }
    if (leftward) {
      hero.scene.position.x -= distance;
    }
    if (rightward) {
      hero.scene.position.x += distance;
    }
    // Mise à jour de la position de la boîte de collision du héros
    // chassisApi.box.position.copy(hero.scene.position);
  });

  return controls;
};
