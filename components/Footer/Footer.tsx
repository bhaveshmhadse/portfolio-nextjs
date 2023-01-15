import Link from "next/link";
import { useEffect, useState } from "react";
import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";

const Footer = ({}) => {
  let [year, setyear] = useState("");

  useEffect(() => {
    setyear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className='w-full flex items-center justify-center' style={{ height: "50vh" }}>
      <div className='w-10/12 px-2 flex flex-col-reverse lg:flex-row  h-5/6'>
        <div className='lg:w-1/2 flex flex-col items-center justify-between p-2'>
          <div className='h-auto w-full my-1'>
            <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm mt-1'>Writing clean and robust code is my passion</p>
            <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm mt-1'>I love to build something great together.</p>
          </div>
          <div className='h-auto w-full my-1'>
            <div className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-3xl py-2'>Contact</div>
            <div>
              <div className='w-1/2 border-t-2 border-solid border-gray-400 py-2'></div>
            </div>
            <div className=''>
              <div className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm'>
                <Link href={"tel:+919136298868"}>+91 9136298868</Link>
              </div>
              <div className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm'>
                <Link href={"mailto: bhaveshmhadse9@gmail.com"}>bhaveshmhadse9@gmail.com</Link>
              </div>
            </div>
          </div>
          <div className='w-full font-bold text-gray-400 leading-tight paragraph text-xs'>
            <p className='underline pb-1'>©{year} Bhavesh Mhadse Designs. All rights Reserved.</p>
            <p className='underline '>
              Proudly created with{" "}
              <Link href={"https://nextjs.org/"} passHref>
                <span className='text-gray-300 cursor-pointer'>NextJS</span>
              </Link>{" "}
              and{" "}
              <Link href={"https://tailwindcss.com/"} passHref>
                <span className='text-gray-300 cursor-pointer'>TailwindCSS</span>
              </Link>.
            </p>
          </div>
        </div>
        <div className='lg:w-1/2 flex flex-col items-center justify-center p-2'>
          <div className='h-auto w-full my-1'>
            <div className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-3xl py-2'>Social</div>
            <div>
              <div className='w-1/2 border-t-2 border-solid border-gray-400'></div>
            </div>
            <div className='w-full flex flex-co '>
              <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm pt-2 hover:text-slate-500 duration-300 hover:scale-105'>
                <Link href={"https://www.instagram.com/bhaaaavesh__/"}>instagram </Link>
              </p>
              <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm pt-2 hover:text-slate-500 duration-300 hover:scale-105'>
                <Link href={"https://www.facebook.com/bhavesh.mhadse.7/"}>facebook </Link>
              </p>
              <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm pt-2 hover:text-slate-500 duration-300 hover:scale-105'>
                <Link href={"https://github.com/bhaveshmhadse"}>github </Link>
              </p>
              <p className='text-justify lg:pr-4 font-bold text-gray-400 leading-tight paragraph text-sm pt-2 hover:text-slate-500 duration-300 hover:scale-105'>
                <Link href={"https://www.linkedin.com/in/bhaveshmhadse/"}>linkedin </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
