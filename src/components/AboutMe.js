import * as React from "react";
import "./AboutMe.scss";

import FilsWorkshopImg from "../images/fils-workshop.jpg";
import InternalWorkshop from "../images/internal-workshop.jpg";
import Promises from "../images/Promises.png";
import StorybookGif from "../images/Storybook.gif";
import Separator from "./Separator";

const redirectTo = (url) => {
  window.open(url, "_blank");
};

const AboutMe = () => {
  return (
    <div className="about__container">
      <h1 className="about__title">Community contributions</h1>
      <div class="about__description__container">
        <h4 class="about__description">
          The most exciting part of programming and working in IT is the
          opportunity to help the others. From mentoring students/junior
          programmers to open source contributions, there are endless ways to
          help.
        </h4>
      </div>

      <Separator />
      <div className="about__section">
        <h3 class="about__section__title">Teaching</h3>
        <h4 class="about__section__description">
          I collaborate with the University of Bucharest, Faculty of Mathematics
          and Informatics, where I teach web development for students.
          <ul class="about__section__description">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node.js</li>
          </ul>
          This activity is part-time (between 4 hours and 10 hours, depending on
          the semester) and consists of creating teaching materials and
          evaluating projects. All the materials are in romanian and publicly
          available on the dedicated website and on Youtube.
          <p className="link">
            <a href="https://laborator-fmi-web.educationhost.cloud/pages/Laborator10_NodeJS.html">
              Website Link
            </a>
          </p>
          <iframe src="https://laborator-fmi-web.educationhost.cloud/pages/Laborator10_NodeJS.html"></iframe>
          <p className="link">
            <a href="https://www.youtube.com/watch?v=zChw1EE5Ai0">
              Youtube recordings
            </a>
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zChw1EE5Ai0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </h4>
      </div>

      <Separator />
      <div className="about__section">
        <h3 class="about__section__title">Workshops</h3>
        <h4 class="about__section__description">
          Working at Cognizant Softvision I am involved in organizing different
          workshop, both internal and external. Some examples:
        </h4>
        <h4 class="about__section__description">External Workshop</h4>
        <img src={FilsWorkshopImg} className="about__section__image" />
        <h4 class="about__section__description">Internal Workshop</h4>
        <img src={InternalWorkshop} className="about__section__image" />
      </div>

      <Separator />
      <div className="about__section">
        <h3 class="about__section__title">Latest articles</h3>
        <h4 class="about__section__description">
          I find time to write about different subjects, from programming to
          soft skills. You can subscribe to receive notifications when I write
          something new.
        </h4>
        <h4 class="about__section__description">
          Promises in Javascript: Explained for Kids
        </h4>
        <img
          src={Promises}
          className="about__section__image pointer"
          onClick={() => {
            redirectTo(
              "https://levelup.gitconnected.com/promises-in-javascript-explained-for-kids-a69e56b58e2c"
            );
          }}
        />
        <br />
        <h4 class="about__section__description">
          All you can learn about storybook in 10 minutes
        </h4>
        <img
          src={StorybookGif}
          className="about__section__image pointer"
          onClick={() => {
            redirectTo(
              "https://levelup.gitconnected.com/promises-in-javascript-explained-for-kids-a69e56b58e2c"
            );
          }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
