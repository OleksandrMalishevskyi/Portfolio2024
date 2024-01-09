// import Fade from "react-reveal/Fade";

// import svgUnderConst from "../../assets/images/undraw_under_construction_-46-pa.svg";

// import { CustomTitle } from "../../components";
// import { EducationTitle } from '../../data/titledata'

// import "./education.scss";

import { NavLink } from "react-router-dom";
import LogoTitle from "../../assets/images/TT_logo_round.svg";

import Logo from "../../components/Logo/Logo";

import { CustomTitle } from "../../components";
import { HiTitle, IamTitle, NameTitle, JobTitle } from "../../data/titledata";
// import "./home.scss";

const Education = () => {
  return (

<>
      <div className="homeparent">
        <div className="homegrid1">
          <CustomTitle lettersArray={HiTitle.lettersArray} />
        </div>
        <div className="homegrid2">
          <Logo />
        </div>
        <div className="homegrid3">
          <CustomTitle lettersArray={IamTitle.lettersArray} />
        </div>
        <div className="homegrid4">
          <img
            src={LogoTitle}
            alt="JavaScript Developer Name, Web Developer Name"
          />
        </div>
        <div className="homegrid5">
          <CustomTitle lettersArray={NameTitle.lettersArray} />
        </div>
        <div className="homegrid6">
          <CustomTitle lettersArray={JobTitle.lettersArray} />
        </div>
        <div className="homegrid7">
          <p className="text-desc">WEB DEVELOPER / UI/UX DESIGNER</p>
        </div>
        <div className="homegrid8">
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
      </div>
    </>
  );
};
//     <>
//       <CustomTitle
//         title={EducationTitle.title}
//         lettersArray={EducationTitle.lettersArray}
//         text1={EducationTitle.text1}
//       />

//       <section className="section__tutorial section__padding">
//         <div className="section__tutorial-wrapper">
//           <Fade bottom>
//             <img src={svgUnderConst} alt="under construction" />
//             <div className="section__tutorial-heading">
//               <h2>Page is under contruction</h2>
//             </div>
//           </Fade>
//         </div>
//       </section>
//     </>
//   );
// };



export default Education;
