const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

const connections = [
  //   { id: "7", type: "output", data: { label: "output" }, position },
  { id: "newbie-python", source: "newbie", target: "python", type: edgeType, animated: true },
  { id: "newbie-problem-solving", source: "newbie", target: "problem-solving", type: edgeType, animated: true },
  { id: "newbie-javascript", source: "newbie", target: "javascript", type: edgeType, animated: true },

  //   { id: "python-javascript", source: "python", target: "javascript", type: edgeType, animated: true, style: { stroke: "gray" } },
  { id: "python-small-programs", source: "python", target: "small-programs", type: edgeType, animated: true, style: { stroke: "gray" } },
  { id: "small-programs-A-2D-Space-Game", source: "small-programs", target: "A-2D-Space-Game", type: edgeType, animated: true, style: { stroke: "gray" } },

  { id: "javascript-sorting-visualizer", source: "javascript", target: "sorting-visualizer", type: edgeType, animated: true },
  { id: "sorting-visualizer-spotify-clone", source: "sorting-visualizer", target: "spotify-clone", type: edgeType, animated: true },
  { id: "javascript-reactjs", source: "javascript", target: "reactjs", type: edgeType, animated: true },

  { id: "reactjs-quizo", source: "reactjs", target: "quizo", type: edgeType, animated: true },
  { id: "quizo-pathfinding-visualizer", source: "quizo", target: "pathfinding-visualizer", type: edgeType, animated: true },
  //   { id: "javascript-problem-solving", source: "javascript", target: "problem-solving", type: edgeType, animated: true },
  { id: "problem-solving-data-structures-and-algorithms", source: "problem-solving", target: "data-structures-and-algorithms", type: edgeType, animated: true },
  { id: "data-structures-and-algorithms-practice-on-competitive-coding-websites", source: "data-structures-and-algorithms", target: "practice-on-competitive-coding-websites", type: edgeType, animated: true },
  { id: "practice-on-competitive-coding-websites-earned-certificates", source: "practice-on-competitive-coding-websites", target: "earned-certificates", type: edgeType, animated: true },

  { id: "reactjs-nodejs", source: "reactjs", target: "nodejs", type: edgeType, animated: true },
  { id: "nodejs-mern", source: "nodejs", target: "mern", type: edgeType, animated: true },
  { id: "mern-codigo", source: "mern", target: "codigo", type: edgeType, animated: true },
];

const arrayOfElements = [
  {
    id: "newbie",
    data: {
      label: "NewBie",
    },
    type: "input",
    position,
    style: {
      fontSize: "1rem",
      stroke: "skyblue",
      background: "transparent",
      color: "skyblue",
      fontWeight: 900,
      border: "1px solid skyblue",
      borderRadius: ".5rem",
    },
  },

  {
    id: "python",
    data: { label: "Python" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      stroke: "gold",
      color: "gold",
      fontWeight: 900,
      border: "1px solid gold",
      borderRadius: ".5rem",
    },
  },

  {
    id: "small-programs",
    data: { label: "Small Programs" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      stroke: "gold",
      color: "gold",
      fontWeight: 900,
      border: "1px solid gold",
      borderRadius: ".5rem",
    },
  },

  {
    id: "A-2D-Space-Game",
    data: { label: "A 2D Space Game" },
    type: "output",
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      stroke: "gold",
      color: "gold",
      fontWeight: 900,
      border: "1px solid gold",
      borderRadius: ".5rem",
    },
  },

  {
    id: "javascript",
    data: { label: "javascript" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "#1ed760",
      fontWeight: 900,
      border: "1px solid #1ed760",
      borderRadius: ".5rem",
    },
  },
  {
    id: "spotify-clone",
    data: { label: "Spotify Clone" },
    type: "output",
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "lightgray",
      fontWeight: 900,
      border: "1px solid lightgray",
      borderRadius: ".5rem",
    },
  },
  {
    id: "sorting-visualizer",
    data: { label: "Sorting Visualizer" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "lightgray",
      fontWeight: 900,
      border: "1px solid lightgray",
      borderRadius: ".5rem",
    },
  },

  {
    id: "reactjs",
    data: { label: "reactjs" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "#1ed760",
      fontWeight: 900,
      border: "1px solid #1ed760",
      borderRadius: ".5rem",
    },
  },
  {
    id: "quizo",
    data: { label: "Quizo - Quiz Application" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "lightgray",
      fontWeight: 900,
      border: "1px solid lightgray",
      borderRadius: ".5rem",
    },
  },
  {
    id: "pathfinding-visualizer",
    data: { label: "Path Finding Visualizer" },
    type: "output",
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "lightgray",
      fontWeight: 900,
      border: "1px solid lightgray",
      borderRadius: ".5rem",
    },
  },

  {
    id: "nodejs",
    data: { label: "nodejs" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "#1ed760",
      fontWeight: 900,
      border: "1px solid #1ed760",
      borderRadius: ".5rem",
    },
  },
  {
    id: "mern",
    data: { label: "mern" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "#1ed760",
      fontWeight: 900,
      border: "1px solid #1ed760",
      borderRadius: ".5rem",
    },
  },
  {
    id: "codigo",
    data: { label: "Built codigo" },
    type: "output",
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "lightgray",
      fontWeight: 900,
      border: "1px solid lightgray",
      borderRadius: ".5rem",
    },
  },
  {
    id: "problem-solving",
    data: { label: "Problem Solving" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "magenta",
      fontWeight: 900,
      border: "1px solid magenta",
      borderRadius: ".5rem",
    },
  },
  {
    id: "data-structures-and-algorithms",
    data: { label: "Data Structures and Algorithms" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "magenta",
      fontWeight: 900,
      border: "1px solid magenta",
      borderRadius: ".5rem",
    },
  },
  {
    id: "practice-on-competitive-coding-websites",
    data: { label: "Practice in Coding Websites" },
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "magenta",
      fontWeight: 900,
      border: "1px solid magenta",
      borderRadius: ".5rem",
    },
  },
  {
    id: "earned-certificates",
    data: { label: "Earned Certificates" },
    type: "output",
    position,
    style: {
      fontSize: "1rem",
      background: "transparent",
      color: "magenta",
      fontWeight: 900,
      border: "1px solid magenta",
      borderRadius: ".5rem",
    },
  },

  ...connections,
];

export { arrayOfElements, position, edgeType };
