import { useEffect, useState } from "react";

import Navbar from "../Hero/Navbar";

import { projectsAndTechStack } from "./ProjectsData";
import { globalSkillsHash } from "../Skills/Languages";

const IndividualProject = ({ projectName }: any) => {
  let [arr, setarr] = useState(projectsAndTechStack[projectName] || [1, 2, 3]);

  useEffect(() => {
    setarr(projectsAndTechStack[projectName]);
  }, []);

  return (
    <div className='flex w-full h-auto bg-zinc-800 lg:h-1/2 mb-10'>
      <Navbar key={Math.random().toString()} />
      {arr && (
        <div className='flex items-center mt-8 justify-center lg:mt-auto h-auto lg:w-full lg:h-screen '>
          <div className='block lg:flex items-center justify-center'>
            <ProjectImageMain projectName={projectName} />
            <div className='flex w-full lg:pt-12  px-1 items-center justify-center'>
              <div className='w-full h-auto lg:h-1/4 grid grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0 gap-x-4 gap-y-3'>
                {arr.map(eachObj => (
                  <div className='lg:p-0 w-full h-full lg:py-2 p-2 flex flex-col items-center justify-center' key={Math.random().toString()}>
                    <section className='w-2/6 lg:w-1/2  zoomerTwo roundedlg drop-shadow-lg rounded-2xl'>{globalSkillsHash[eachObj.heading]}</section>
                    <span className='pt-3 select-none  font-black text-zinc-400 uppercase whitespace-nowrap'>{eachObj.heading}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {!arr && <Error heading={"No Project Found"} />}
    </div>
  );
};

const Error = ({ heading }) => <div className='flex  w-screen h-screen items-center justify-center text-center font-extrabold text-zinc-400'>{heading}</div>;

const ProjectImageMain = ({ projectName }) => {
  return (
    <div className={`w-full lg:p-4 flex  items-center  my-10 justify-center`}>
      <div className='justify-start items-start h-auto lg:w-full w-11/12  flex'>
        <img className='hover:scale-110 duration-300 hover:drop-shadow-2xl lg:p-2 rounded-lg-full drop-shadow-lg w-full smooth-image' style={{ borderRadius: "20px" }} src={`${projectName.toLowerCase()}.jpg`} />
      </div>
    </div>
  );
};

export default IndividualProject;
