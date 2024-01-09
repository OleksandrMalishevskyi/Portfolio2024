import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import LogoStroke from "./LogoStroke.js";
import LogoFill from "./LogoFill.js";

import "./logo.scss";

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 8,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container switch__stroke-color" ref={bgRef}>
      <div className="logostroke">
        {" "}
        <LogoStroke />{" "}
      </div>
      <div className="logofill" ref={solidLogoRef}>
        {" "}
        <LogoFill width="500" height="500" />

      </div>
    </div>
  );
};

export default Logo;
