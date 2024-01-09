import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoTitle from "../../assets/images/TT_logo_round.svg";
import Blast from "../../components/BlastAnimation/Blast";
import Logo from "../../components/Logo/Logo";

// import { Blast, Logo } from '../../components'
import "./home.scss";

const nameArray = ["l", "e", "k", "s", "a", "n", "d", "r"];
const jobArray = [
  "w",
  "e",
  "b",
  "",
  "d",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
  ".",
];

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <section className="section-1 header__container section__padding">
        <div className="intro-page">
          <h1 arial-label="Hi i'm Oleksandr, web  full-stack developer">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span> {""}
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">WEB DEVELOPER / UI/UX DESIGNER</p>
          <NavLink
            to="/contact"
            className="contact-button"
            activeClassName="active"
          >
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </NavLink>
        </div>
        <Logo />
      </section>
    </>
  );
};

export default Home;
