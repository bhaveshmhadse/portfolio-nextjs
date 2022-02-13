import { useEffect } from "react";
import Skill from "./Skill";

const SkillsContainer = ({ arrayOfSkills }: { arrayOfSkills: any[] }) => {
  return (
    <div className='flex p-4 mt-10'>
      <div className='w-full grid lg:grid-cols-3 grid-cols-2 text-center gap-10'>
        {arrayOfSkills.map((eachSkill: any, index) => (
          <Skill key={Math.random().toString()} title={eachSkill.title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
