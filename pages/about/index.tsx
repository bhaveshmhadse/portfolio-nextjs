import About from "../../components/About/About";
import Navbar from "../../components/Hero/Navbar";

const AboutPage = () => {
  return (
    <div className='bg-zinc-800'>
      <Navbar key={Math.random().toString()} />
      <About />
    </div>
  );
};

export default AboutPage;
