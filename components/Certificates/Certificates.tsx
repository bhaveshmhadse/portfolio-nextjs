import { motion } from "framer-motion";

const Certficates = ({ arrayOfCertificates }) => {
  return (
    <div className='flex items-center justify-center mb-20'>
      <div className='h-auto lg:w-5/6 mt-10'>
        <div className=' grid lg:grid-cols-3 grid-cols-1 h-auto gap-20 drop-shadow-lg mx-4 lg:mx-0 '>
          {arrayOfCertificates.map(eachObj => (
            <CertificateCard certificateTopic={eachObj.certificateTopic} certificateInfo={eachObj.certificateInfo} certificateImage={eachObj.certificateImage} certificateLink={eachObj.certificateLink} key={Math.random().toString()} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CertificateCard = ({ certificateTopic, certificateInfo, certificateImage, certificateLink }) => {
  return (
    <motion.div className='w-full h-auto  bg-gray-800 rounded-lg'>
      <div className='overflow-hidden'>
        <motion.img src={`${certificateImage}`} alt='certificate' className='rounded-t-lg  ease-in-out duration-100 zoomer transition-all overflow-hidden' />
      </div>
      <h1 className='text-xl text-gray-200 my-4 mx-2 font-black'>{certificateTopic}</h1>
      <p className='text-sm text-gray-500 my-2 mx-2 font-bold text-justify leading-relaxed paragraph'>{certificateInfo} </p>
      <button className='text-sm text-blue-400 hover:animate-pulse my-2 mx-2 font-semibold  hover:after:content-[">>"]  transition-all ease-in-out delay-1000 duration-700 overflow-hidden'>
        <a href={certificateLink}>View certificate </a>
      </button>
    </motion.div>
  );
};

export default Certficates;
