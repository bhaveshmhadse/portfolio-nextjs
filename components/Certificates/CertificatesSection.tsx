import Header from "../Global/Header";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";
import Certficates from "./Certificates";

const CertificatesSection = () => {
  return (
    <div>
      <Header title={"Certificates"} />

      <Certficates arrayOfCertificates={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />

      <DecorativeLineSeperator />
    </div>
  );
};

export default CertificatesSection;
