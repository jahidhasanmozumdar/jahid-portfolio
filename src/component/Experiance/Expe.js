import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { SiBootstrap,SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
              <ImHtmlFive></ImHtmlFive>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
              <DiCss3></DiCss3>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript </h4>
              <TbBrandJavascript></TbBrandJavascript>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
              <SiTailwindcss></SiTailwindcss>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
              <SiBootstrap></SiBootstrap>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React , Redux-toolkit</h4>
              <RiReactjsLine></RiReactjsLine>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
