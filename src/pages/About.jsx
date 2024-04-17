import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "~/components";
import { experiences, skills } from "~/constants";
import { myCV } from "~/assets/documents";

const About = () => {
  useLayoutEffect(() => {
    document.title = "Tu Nguyen";
  }, []);

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="yellow-gradient_text font-semibold drop-shadow">
          Tú
        </span>{" "}
        👋
      </h1>

      <p className="my-5 text-white/70">
        Front-end developer in Vietnam, specializes in building website
        applications.
      </p>

      <a href={myCV} target="_blank" className="btn">
        Download CV
      </a>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              title={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experiences</h3>
        <div className="mt-5 flex flex-col gap-3 text-white/70">
          <p>
            I have worked on several outsourcing projects for foreign partners
            such as Korea, Japan, Indonesia,... Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName="text-white"
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  backgroundColor: "#3d3e42",
                }}
                contentArrowStyle={{ borderRightColor: "#3d3e42" }}
              >
                <div>
                  <h3 className="text-white text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-white/90 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white/70 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
