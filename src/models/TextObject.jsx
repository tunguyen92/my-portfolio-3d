import { Center, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";

const TextObject = ({
  margin = 0.5,
  text,
  position,
  rotation,
  onClick,
  args,
  colorBackground,
  emissiveBackground,
  colorText,
}) => {
  const { width, height } = useThree((state) => state.viewport);
  const textRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // Stop event from propagating to parent objects
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <group>
      {/* Invisible clickable plane */}
      <mesh onClick={handleClick} position={position} rotation={rotation}>
        <boxGeometry args={args} />
        <meshStandardMaterial
          visible={true}
          side={DoubleSide}
          transparent
          opacity={0.5}
          color={colorBackground}
          emissive={emissiveBackground}
        />
      </mesh>

      {/* <Center
        bottom
        right
        position={[-width / 2 + margin, height / 2 - margin, 0]}
      >
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          top left
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          bottom right
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center> */}
      <Center position={position} rotation={rotation}>
        <Text3D
          ref={textRef}
          curveSegments={32}
          // bevelEnabled
          // bevelSize={0.02}
          // bevelThickness={0.005}
          height={0.3}
          lineHeight={0.7}
          size={0.5}
          font="/Inter_Bold.json"
        >
          {text}
          <meshStandardMaterial color={colorText} />
        </Text3D>
      </Center>
    </group>
  );
};

export default TextObject;
