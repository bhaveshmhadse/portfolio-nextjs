import { useEffect, useState } from "react";
import Navbar from "../Hero/Navbar";
import { projectsAndParts } from "./ProjectsData";

const IndividualProject = ({ projectName }: any) => {
  let [arr, setarr] = useState(projectsAndParts[projectName] || [1, 2, 3]);

  useEffect(() => {
    setarr(projectsAndParts[projectName]);
  }, []);

  return (
    <div className='flex w-full h-auto bg-zinc-800 lg:h-1/2 mb-10'>
      <Navbar />
      {arr && (
        <div className='flex items-center mt-8 justify-center lg:mt-auto h-auto lg:w-full lg:h-screen '>
          <div className=' px-4 block lg:flex items-center justify-center'>
            <ProjectImageMain projectName={projectName} />
            <div className='flex w-full  px-6 items-center justify-center'>
              <div className='w-full h-auto lg:h-1/4 grid grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0 gap-x-4 gap-y-3'>
                {arr.map(eachObj => (
                  <div className='lg:p-0 w-full h-full lg:py-2 p-2 flex flex-col items-center justify-center' key={Math.random().toString()}>
                    <img className='lg:w-5/6 w-full zoomerTwo rounded-lg drop-shadow-lg' src={eachObj.imageUrl} alt='Image' />
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
  useEffect(() => {
    console.log(`${projectName}/${projectName}.jpg`);
  }, []);

  return (
    <div className={`w-full  lg:p-4 flex  items-center  my-10 justify-center`}>
      <div className='justify-start items-start h-auto lg:w-full w-11/12  flex'>
        <img className='hover:scale-110 duration-300 hover:drop-shadow-2xl lg:p-2 rounded-lg-full drop-shadow-lg w-full smooth-image' style={{ borderRadius: "20px" }} src={`${projectName.toLowerCase()}.jpg`} />
      </div>
    </div>
  );
};

export default IndividualProject;
