import { motion } from "framer-motion";

const Certficates = ({ arrayOfCertificates }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-auto lg:w-5/6 mt-10'>
        <div className=' grid lg:grid-cols-3 grid-cols-1 h-auto gap-20 drop-shadow-lg mx-4 lg:mx-0'>
          {arrayOfCertificates.map(eachObj => (
            <CertificateCard key={Math.random().toString()} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CertificateCard = () => {
  return (
    <motion.div className='w-full h-auto  bg-gray-800 rounded-lg'>
      <motion.img whileHover={{  objectFit:"cover" }} whileTap={{ scale: 0.8 }} transition={{ duration: 3, ease: "easeInOut" }} src='demo.png' alt='certificate' className='rounded-t-lg object-none hover:obect-cover ease-in-out duration-100000 transition-all' />
      <h1 className='text-xl text-gray-200 my-4 mx-2 font-extrabold'>Baray</h1>
      <p className='text-sm text-gray-500 my-2 mx-2 font-bold text-justify'>dffljk dslfdklf lf dklf dofhdkl lkjdfbldsj.dkfl hflihf </p>
      <button className='text-sm text-blue-400 mb-2 mx-2 font-semibold  hover:after:content-[">>"]  transition-all ease-in-out delay-1000 duration-700 overflow-hidden'>View certificate </button>
    </motion.div>
  );
};

export default Certficates;
