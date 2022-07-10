import Skill from "./Skill";

const SkillsContaine = ({ arrayOfSkills }: { arrayOfSkills: any[] }) => {
  return (
    <div className='flex p-4 mt-10  h-screen'>
      <div className='w-full grid lg:grid-cols-3 grid-cols-2 text-center gap-10'>
        {arrayOfSkills.map((eachSkill: any, index) => (
          <Skill key={Math.random().toString()} title={eachSkill.title} index={index} />
        ))}
      </div>
    </div>
  );
};

const SkillsContainer = ({ arrayOfSkills }) => {
  return (
    <div className='flex  items-center lg:pt-8 pt-11 mb-8 justify-center lg:mt-auto h-auto  w-full  '>
      <div className='lg:px-0 px-4 h-auto block lg:w-11/12  items-center justify-center '>
        {/* <ProjectImageMain projectName={projectName} /> */}
        <div className='flex w-full items-center lg:items-start lg:justify-start justify-center'>
          <div className='w-full  h-auto grid grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10 gap-x-2 gap-y-8'>
            {arrayOfSkills.map(eachObj => (
              <div className='lg:p-0 w-full h-full lg:py-2 lg:px-0 p-2 px-6 flex flex-col items-center justify-center' key={Math.random().toString()}>
                <img className=' w-1/2 lg:w-1/2 zoomerTwo roundedlg drop-shadow-lg  rounded-xl' src={`skills/${eachObj.title}.svg`} alt='Image' />
                <span className='pt-6 select-none  font-black text-zinc-400 uppercase whitespace-nowrap'>{eachObj.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
("");
("");
