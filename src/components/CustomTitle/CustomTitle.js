import { useState, useEffect } from "react";
import { Blast } from "../../components";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import "./customtitle.scss";

const CustomTitle = ({ title, lettersArray, text1, text2, text3 }) => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="section-customtitle">
        <Reveal>
          <div className="fake-big">{title}</div>
        </Reveal>
        <div className="section-customtitle-wrapper section__padding">
          <article className="section-customtitle-description">
            <h2 aria-label={title}>
              <Blast
                letterClass={letterClass}
                arrayStr={lettersArray}
                indexLetter={lettersArray.length}
              />
            </h2>
            <div className="description-content">
              <Fade bottom>
                <p>{text1}</p>
              </Fade>
              <Fade bottom>
                <p>{text2}</p>
              </Fade>
              <Fade bottom>
                <p>{text3}</p>
              </Fade>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default CustomTitle;
