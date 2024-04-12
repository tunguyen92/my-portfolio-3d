import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
} from "@react-three/drei";

export default function App() {
  return (
    <section className="w-full h-screen ">
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />

        <Scene onClick={() => console.log("Scene")} />

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </section>
  );
}

function AboutTest({ margin = 0.5, onClick }) {
  const { width, height } = useThree((state) => state.viewport);

  const handleClick = (event) => {
    event.stopPropagation(); // Stop event from propagating to parent objects
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <group>
      <mesh onClick={handleClick}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial visible={false} />
      </mesh>

      <Center
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
      </Center>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`hello\nworld`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </group>
  );
}
