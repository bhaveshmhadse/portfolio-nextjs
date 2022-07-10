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
    <div className='flex items-center pt-11 mb-8 justify-center lg:mt-auto h-auto lg:w-full lg:h-screen '>
      <div className=' px-4 block lg:flex items-center justify-center'>
        {/* <ProjectImageMain projectName={projectName} /> */}
        <div className='flex w-full  px-6 items-center justify-center'>
          <div className='w-full h-auto lg:h-1/4 grid grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0 gap-x-2 gap-y-8'>
            {arrayOfSkills.map(eachObj => (
              <div className='lg:p-0 w-full h-full lg:py-2 p-2 flex flex-col items-center justify-center' key={Math.random().toString()}>
                <img className='lg:w-5/6 w-full zoomerTwo rounded-lg drop-shadow-lg' src={"projects/pathfinding visualizer.jpg"} alt='Image' />
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
