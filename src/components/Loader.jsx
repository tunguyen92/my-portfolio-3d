import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-yellow-500 border-t-yellow-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
