import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  let [show, setshow] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0, y: [10, 0], transition: { staggerChildren: 0.7 } },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0, y: [100, 0] },
  };

  const getSelectedButton = () => localStorage.getItem("selectedButton");

  useEffect(() => {
    if (!localStorage.getItem("selectedButton")) localStorage.setItem("selectedButton", "Home");

    setTimeout(() => {
      setshow(true);
    }, 1000);
  }, []);

  return (
    <div key={Math.random().toString()} style={{ background: "rgba(39, 39, 42, 0.5)" }} className='  fixed flex w-full p-2 z-50'>
      <div className='flex  w-full items-center'>
        <div className='cursor-pointer w-8 h-8 mx-2 flex items-center justify-center'>
          <img src='profile/bhaveshmhadse.jpg' className='rounded-full' alt='' />
        </div>
      </div>

      {!show && <motion.div variants={container} initial='hidden' animate='show' className='flex   w-auto lg:w-2/3 float-right' />}

      {show && (
        <motion.div variants={container} initial='hidden' animate='show' className='flex w-auto lg:w-2/3 float-right'>
          <Link key={Math.random().toString()} href='/'>
            <motion.button variants={item} className={`${getSelectedButton() == "Home" ? " bg-rose-400 text-black " : " text-rose-400 bg-transparent "} m-auto px-5 rounded-lg font-semibold text-sm p-2 hover:bg-rose-400 hover:text-black duration-300`} onClick={() => localStorage.setItem("selectedButton", "Home")}>
              Home
            </motion.button>
          </Link>

          <Link key={Math.random().toString()} href='/about'>
            <motion.button variants={item} className={`${getSelectedButton() == "About" ? " bg-rose-400 text-black " : " text-rose-400 bg-transparent "} m-auto px-5 rounded-lg font-semibold text-sm p-2 hover:bg-rose-400 hover:text-black duration-300`} onClick={() => localStorage.setItem("selectedButton", "About")}>
              About
            </motion.button>
          </Link>

          <Link key={Math.random().toString()} href='/projects'>
            <motion.button variants={item} className={`${getSelectedButton() == "Projects" ? " bg-rose-400 text-black " : " text-rose-400 bg-transparent "} m-auto px-5 rounded-lg font-semibold text-sm p-2 hover:bg-rose-400 hover:text-black duration-300`} onClick={() => localStorage.setItem("selectedButton", "Projects")}>
              Projects
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
