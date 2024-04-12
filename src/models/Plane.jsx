import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "~/assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useLayoutEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
