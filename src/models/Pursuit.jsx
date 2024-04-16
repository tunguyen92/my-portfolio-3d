import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";

import pursuitScene from "~/assets/3d/the_pursuit.glb";

const titleArr = [
  "˚˖𓍢ִִ໋_______________________𓊝𓆟˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋______________________𓊝𓆝_˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_____________________𓊝𓆞__˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋____________________𓊝𓆟___˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋___________________𓊝𓆝____˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋__________________𓊝𓆞_____˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_________________𓊝𓆟______˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋________________𓊝𓆝_______˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_______________𓊝𓆞________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋______________𓊝𓆟_________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_____________𓊝𓆝__________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋____________𓊝𓆞___________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋___________𓊝𓆟____________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋__________𓊝𓆝_____________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_________𓊝𓆞______________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋________𓊝𓆟_______________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_______𓊝𓆝________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋______𓊝𓆞_________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_____𓊝𓆟__________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋____𓊝𓆝___________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋___𓊝𓆞____________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋__𓊝𓆟_____________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋_𓊝𓆝______________________˚˖𓍢ִ✧˚",
  "˚˖𓍢ִִ໋𓊝𓆞_______________________˚˖𓍢ִ✧˚",
];

const animationName = "Animation loop";

const Pursuit = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  setIsGrabbing,
  ...props
}) => {
  const pursuitRef = useRef();
  const { scene, animations } = useGLTF(pursuitScene);
  const { actions } = useAnimations(animations, pursuitRef);
  const { gl } = useThree();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePointerDown = (event) => {
    event.preventDefault();
    setIsGrabbing(true);
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.preventDefault();
    setIsGrabbing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      if (!isRotating) {
        setIsRotating(true);
        actions[animationName].play();
        actions[animationName].setEffectiveTimeScale(0.6);
        actions[animationName].paused = false;
      } else {
        setIsRotating(false);
        actions[animationName].paused = true;
      }
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!isRotating) {
      setIsRotating(true);
      actions[animationName].play();
      actions[animationName].paused = false;
    } else {
      setIsRotating(false);
      actions[animationName].paused = true;
    }
  };

  useLayoutEffect(() => {
    const canvas = gl.domElement;
    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl, isRotating, handlePointerDown, handlePointerUp]);

  useLayoutEffect(() => {
    if (isRotating) {
      intervalRef.current = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleArr.length);
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRotating, titleArr.length]);

  useLayoutEffect(() => {
    document.title = titleArr[currentTitleIndex];
  }, [currentTitleIndex, titleArr]);

  useFrame(() => {
    if (isRotating) {
      const animationPlaybackTime = actions[animationName].time;

      // Set the current stage based on the island's orientation
      switch (true) {
        case animationPlaybackTime >= 11 && animationPlaybackTime <= 13:
          setCurrentStage(4);
          break;
        case animationPlaybackTime >= 7 && animationPlaybackTime <= 9:
          setCurrentStage(3);
          break;
        case animationPlaybackTime >= 4 && animationPlaybackTime <= 6:
          setCurrentStage(2);
          break;
        case animationPlaybackTime >= 1 && animationPlaybackTime <= 3:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    // to create and display 3D objects

    <mesh
      ref={pursuitRef}
      // rotation={[0, 22, 0]}
      // position={[-360, -10, 20]}
      // scale={[0.003, 0.003, 0.003]}
      rotation={[0, 21, 0]}
      position={[-160, -10, -180]}
      scale={[0.002, 0.002, 0.002]}
    >
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Pursuit;
