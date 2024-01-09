import { SkillsCloud } from "../../components/index";

import "./skills.scss";

import { Cards, CustomTitle  } from "../../components";
import { SkillsTitle } from '../../data/titledata'

const Skills = () => {


  return (
    <div className="parent">
      <div className="div1">
      <CustomTitle
        title={SkillsTitle.title}
        lettersArray={SkillsTitle.lettersArray}
        text1={SkillsTitle.text1}
      />
      </div>
      <div className="div2">
        <SkillsCloud />
      </div>
      <div className="div3"></div>

      <div className="div4">
        <Cards />
      </div>
    </div>
  );
};

export default Skills;
