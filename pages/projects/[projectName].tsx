import { useRouter } from "next/router";
import IndividualProject from "../../components/Projects/IndividualProject";
import ErrorPage from "next/error";

const IndividualProjectPage = () => {
  const router = useRouter();
  const { projectName } = router.query;

  return <>{projectName?.toString() in projects ? <IndividualProject projectName={projectName} /> : <ErrorPage statusCode={404} />}</>;
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
