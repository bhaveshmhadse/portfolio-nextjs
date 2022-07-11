import { certificatesArray } from "../components/Certificates/DefaultData";

const isEven = (num: number) => num % 2 == 0;

const getCertificatesArray = async () => {
  //   const { data } = await axios.get("BackendURl");

  const data = [...certificatesArray];

  return data;
};

export { isEven, getCertificatesArray };
