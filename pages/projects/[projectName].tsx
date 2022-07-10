import { useRouter } from "next/router";
import IndividualProject from "../../components/Projects/IndividualProject";
import ErrorPage from "next/error";

const IndividualProjectPage = () => {
  const router = useRouter();

  //   console.log(router);
  // console.log()
  console.log("router is:", router);

  const { projectName } = router.query;

  //   return <p>Project Name  {projectName}</p>;
  return <>{projectName?.toString() in projects ? <IndividualProject projectName={projectName} /> : <ErrorPage statusCode={404} />}</>;
  return <>{projectName && <IndividualProject projectName={projectName} />}</>;
};

const projects = {
  codigo: true,
  "pathfinding visualizer": true,
  mini: true,
  "music bay": true,
  "saideep classes": true,
  "sorting visualizer": true,
};

export default IndividualProjectPage;
