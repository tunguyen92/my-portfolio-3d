import { OrbitControls, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useLayoutEffect, useRef, useState } from "react";

import { soundoff, soundon, zoomout, spacebutton } from "~/assets/icons";
import wargame from "~/assets/audios/wargame.mp3";
import { HomeInfo, Loader } from "~/components";
import { Pursuit, Sky } from "~/models";
import Header from "~/templates/home-template/Header";

const isMobile = window.innerWidth < 1024;

const Home = () => {
  const audioRef = useRef(new Audio(wargame));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useLayoutEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <Header />

      {!isRotating && (
        <>
          {/* {currentStage && <HomeInfo currentStage={currentStage} />} */}
          <div className="absolute bottom-2 left-[20%] lg:left-[78%] z-10 flex items-center justify-center text-white w-fit cursor-default">
            {/* {currentStage && <HomeInfo currentStage={currentStage} />} */}
            Drag and zoom to explore
            <img src={zoomout} alt="zoomout" width={16} className="ml-2" />
          </div>

          <div className="absolute bottom-8 left-[20%] lg:left-[78%] z-10 flex items-center justify-center text-white w-fit cursor-default">
            {isMobile ? (
              "Touch "
            ) : (
              <>
                Press
                <img
                  src={spacebutton}
                  alt="spacebutton"
                  width={50}
                  className="mx-2"
                />
              </>
            )}
            to &#9658; | &#10073;&#10073; animation
          </div>
        </>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent
         ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#947d3e"
          groundColor="#947d3e"
          intensity={1}
        />

        {/* <Suspense fallback={<Loader />}> */}
        <Sky isRotating={isRotating} />

        <Pursuit
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          setIsGrabbing={setIsGrabbing}
        />
        {/* </Suspense> */}

        {currentStage && <HomeInfo currentStage={currentStage} />}
        <OrbitControls
          makeDefault
          maxDistance={isMobile ? 40 : 25}
          // minAzimuthAngle={-Math.PI}
          // maxAzimuthAngle={Math.PI}
          // minPolarAngle={0}
          // maxPolarAngle={Math.PI / 2.5}
        />
        <TrackballControls
          noZoom={isMobile ? true : false}
          zoomSpeed={1.5}
          dynamicDampingFactor={0.2}
        />
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
