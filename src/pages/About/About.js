// import myCV from "../../assets/images/MyCV.pdf";
import Fade from "react-reveal/Fade";

// components
import { CustomTitle } from "../../components";
import { AboutTitle } from "../../data/titledata";
import "./about.scss";

const About = () => {
  return (
    <>
      <CustomTitle
        title={AboutTitle.title}
        lettersArray={AboutTitle.lettersArray}
        text1={AboutTitle.text1}
        text2={AboutTitle.text2}
        text3={AboutTitle.text3}
      />
      <Fade left>
        {/* <a
          style={{ marginTop: "2rem" }}
          href={myCV}
          download
          className="contact-button submit-button"
        >
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Download CV</span>
          </div>
        </a> */}
      </Fade>
    </>
  );
};

export default About;
