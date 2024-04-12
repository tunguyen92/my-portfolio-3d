import { Link, useNavigate } from "react-router-dom";

import { arrow } from "~/assets/icons";
import { TextObject } from "~/models";

const HomeInfo = ({ currentStage }) => {
  const navigate = useNavigate();

  if (currentStage === 1)
    return (
      <TextObject
        text={`Hi, I am Tú!\nA Front-end developer from Vietnam`}
        position={[2, 3, -2]}
        rotation={[0, -1, 0.08]}
        args={[14, 2, 0.2]}
        colorBackground="#fdd379"
        emissiveBackground="#2d1f1d"
        colorText="#ffffff"
      />
    );

  if (currentStage === 2) {
    return (
      <>
        <TextObject
          text="Get to know me"
          position={[2, 3, -2]}
          rotation={[0, -1, 0.01]}
          args={[10, 1.5, 0.2]}
          colorBackground="#fdd379"
          emissiveBackground="#2d1f1d"
          colorText="#ffffff"
        />

        <TextObject
          text="About me &rarr;"
          position={[2, 2, -1.5]}
          rotation={[0, -1, 0.01]}
          args={[5.5, 1.2, 0.2]}
          colorBackground="#ffffff"
          emissiveBackground="#2d1f1d"
          colorText="#000000"
          onClick={() => navigate("/about")}
        />
      </>
    );
  }

  if (currentStage === 3) {
    return (
      <>
        <TextObject
          text="Worked on many different foreign projects"
          position={[2, 3, -2]}
          rotation={[0, -1, 0.01]}
          args={[16, 1.5, 0.2]}
          colorBackground="#fdd379"
          emissiveBackground="#2d1f1d"
          colorText="#ffffff"
        />

        <TextObject
          text="Projects &rarr;"
          position={[2, 2, -1.5]}
          rotation={[0, -1, 0.01]}
          args={[5, 1.2, 0.2]}
          colorBackground="#ffffff"
          emissiveBackground="#2d1f1d"
          colorText="#000000"
          onClick={() => navigate("/projects")}
        />
      </>
    );
  }

  if (currentStage === 4) {
    return (
      <>
        <TextObject
          text={`Need a project done or looking for a dev?\nI'm just a few keystrokes away`}
          position={[5, 5, -2]}
          rotation={[0, -1, 0]}
          args={[17, 2.4, 0.2]}
          colorBackground="#fdd379"
          emissiveBackground="#2d1f1d"
          colorText="#ffffff"
        />

        <TextObject
          text="Let's talk &rarr;"
          position={[5, 3.5, -1.5]}
          rotation={[0, -1, 0]}
          args={[5, 1.2, 0.2]}
          colorBackground="#ffffff"
          emissiveBackground="#2d1f1d"
          colorText="#000000"
          onClick={() => navigate("/contact")}
        />
      </>
    );
  }

  // if (currentStage === 1)
  //   return (
  //     <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
  //       Hi, I'm
  //       <span className="font-semibold mx-2 text-white">Tú</span>
  //       👋
  //       <br />A Front-end developer from Vietnam
  //     </h1>
  //   );

  // if (currentStage === 2) {
  //   return (
  //     <div className="info-box">
  //       <p className="font-medium sm:text-xl text-center">
  //         Worked on many different foreign <br /> projects
  //       </p>

  //       <Link to="/about" className="neo-brutalism-white neo-btn">
  //         About me
  //         <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  //       </Link>
  //     </div>
  //   );
  // }

  // if (currentStage === 3) {
  //   return (
  //     <div className="info-box">
  //       <p className="font-medium text-center sm:text-xl">
  //         Led multiple projects to success over the years. <br /> Curious about
  //         the impact?
  //       </p>

  //       <Link to="/projects" className="neo-brutalism-white neo-btn">
  //         Visit my portfolio
  //         <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  //       </Link>
  //     </div>
  //   );
  // }

  // if (currentStage === 4) {
  //   return (
  //     <div className="info-box">
  //       <p className="font-medium sm:text-xl text-center">
  //         Need a project done or looking for a dev? <br /> I'm just a few
  //         keystrokes away
  //       </p>

  //       <Link to="/contact" className="neo-brutalism-white neo-btn">
  //         Let's talk
  //         <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  //       </Link>
  //     </div>
  //   );
  // }

  return null;
};

export default HomeInfo;
