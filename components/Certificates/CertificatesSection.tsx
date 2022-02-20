import { useEffect, useState } from "react";

import Header from "../Global/Header";
import Certficates from "./Certificates";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";

import { getCertificatesArray } from "../../controllers/helperFuntions";

const CertificatesSection = () => {
  let [certificatesArray, setcertificatesArray] = useState([]);

  const getArrayFromBackend = async () => {
    const arrayOfCertificates = await getCertificatesArray();

    setcertificatesArray(arrayOfCertificates);
  };

  useEffect(() => {
    getArrayFromBackend();
  }, []);

  return (
    <div>
      <Header title={"Certificates"} />

      <Certficates arrayOfCertificates={certificatesArray} />

      <DecorativeLineSeperator />
    </div>
  );
};

export default CertificatesSection;
