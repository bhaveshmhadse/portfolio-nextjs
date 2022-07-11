import Navbar from "./Navbar";
import PersonalInformation from "./PersonalInformation";

const HeroSection = () => {
  return (
    <div>
      <Navbar key={Math.random().toString()} />
      <PersonalInformation />
    </div>
  );
};

export default HeroSection;
