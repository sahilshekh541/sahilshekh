import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const Infobox = ({ text, link, btntext }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btntext}
      <img src={arrow} className="h-4 w-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Sahil</span>👋
      <br />
      Front-End Web Developer
    </h1>
  ),
  2: (
    <Infobox
      text="Proven ability to tackle frontend challenges, Worked on projects and Picked up many skills along the way"
      btntext={"Learn More"}
      link={"/about"}
    />
  ),
  3: (
    <Infobox
      text="Complete projects to success over the years. Curious about the impact?"
      btntext={"Visit my portfolio"}
      link={"/projects"}
    />
  ),
  4: (
    <Infobox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      btntext={"Let's talk"}
      link={"/contact"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
