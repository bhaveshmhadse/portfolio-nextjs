import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { certificatesArray } from "./DefaultData";

const Certficates = ({ arrayOfCertificates }) => {
  let [certificateDetailsArray, setcertificateDetailsArray] = useState<any>(certificatesArray);

  useEffect(() => {
    setcertificateDetailsArray(certificatesArray);
  }, []);

  return (
    <div className='flex items-center justify-center mb-20'>
      <div className='h-auto lg:w-11/12 mt-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 h-auto lg:gap-10 gap-20 drop-shadow-lg mx-2 lg:mx-0 '>{certificateDetailsArray && certificateDetailsArray.map(eachObj => <CertificateCard certificateTopic={eachObj.certificateTopic} certificateInfo={eachObj.certificateInfo} certificateImageUrl={eachObj.certificateImageUrl} certificateLink={eachObj.certificateLink} key={Math.random().toString()} />)}</div>
      </div>
    </div>
  );
};

const CertificateCard = ({ certificateTopic, certificateInfo, certificateImageUrl, certificateLink }) => {
  return (
    <motion.div className='w-full h-max mb-auto  bg-transparent rounded-lg flex flex-col items-center justify-center'>
      <div className='overflow-hidde lg:h-2/6 flex items-center justify-center'>
        <motion.img src={`${certificateImageUrl}`} alt='certificate' className='rounded-lg w-3/4  ease-in-out duration-100 zoomer transition-all overflow-hidden shadow-lg' />
      </div>
      <div className='w-3/4 flex lg:items-center lg:justify-center text-center flex-col '>
        <h1 className='text-xl text-gray-200 my-4 mx-3 font-black'>{certificateTopic}</h1>
        <p className=' text-sm  text-gray-500 my-2 lg:mx-3 font-bold text-justify leading-relaxed paragraph'>{certificateInfo} </p>
        <button className=' text-sm bg-orange-40 text-blue-400 hover:animate-pulse mt-1 mb-3 text-center font-semibold  hover:after:content-[">>"]  transition-all ease-in-out delay-1000 duration-700 overflow-hidden'>
          <a href={certificateLink}>View certificate </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Certficates;
