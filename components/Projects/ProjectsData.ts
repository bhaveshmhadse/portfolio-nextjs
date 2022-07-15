const projectsArray = [
  {
    heading: "codigo",
    imageUrl: "projects/codigo.jpg",
    liveDemoUrl: "https://codigoindia.netlify.app/",
    githubUrl: "https://github.com/bhaveshmhadse",
    description: "Built MERN stack Web Application for end users to stream programming courses and compile their code online. Designed Back-end REST API and implemented various functionalities like logins/sign-ups, OTP service, quizzes, certificate emailing functionality upon completion of course and clearing the quiz. Designed Course cards, dashboard, enrolled course cards, and Implemented various routes/endpoints to handle different scenarios. Taught programming courses on various languages and frameworks.",
  },

  {
    heading: "mini",
    imageUrl: "projects/mini.jpg",
    liveDemoUrl: "https://github.com/bhaveshmhadse/Mini",
    githubUrl: "https://github.com/bhaveshmhadse",
    description: "Implemented a voice assistant as well as Intelligent search Engine. Performs day to day tasks like messaging a friend, arrange a google meet,take a selfie,make/readnotes, etc.",
  },
  {
    heading: "pathfinding visualizer",
    imageUrl: "projects/pathfinding visualizer.jpg",
    liveDemoUrl: "https://pathfinding-visualizer-bhaveshmhadse.vercel.app/",
    githubUrl: "https://github.com/bhaveshmhadse",
    description: "Built ReactJS Application featuring how path finding graph algorithms works. Implemented BFS (Breadth First Search) and DFS (Depth First Search)",
  },
  {
    heading: "saideep classes",
    imageUrl: "projects/saideep classes.jpg",
    liveDemoUrl: "https://saideep-classes.netlify.app/",
    githubUrl: "https://github.com/bhaveshmhadse",
    description: "Built an e-commerce web application for saideep classes to manage their admission, exams and student details. One can take admission to classes through this portal and his/her identity will be saved in database for further use. Exam details are filled up by admin for each exams conducted and this data gets stored in database. Students also have their own section where they can upload their image while admission. Implemented the functionality to get all students details including his term-work/exam details in well organised fashion.",
  },
  {
    heading: "sorting visualizer",
    imageUrl: "projects/sorting visualizer.jpg",
    liveDemoUrl: "https://bhaveshmhadse.github.io/Sorting-Visualizer/",
    githubUrl: "https://github.com/bhaveshmhadse",
    description: "Built an e-commerce web application for saideep classes to manage their admission, exams and student details. One can take admission to classes through this portal and his/her identity will be saved in database for further use. Exam details are filled up by admin for each exams conducted and this data gets stored in database. Students also have their own section where they can upload their image while admission. Implemented the functionality to get all students details including his term-work/exam details in well organised fashion.",
  },
];
const techStackHash = {
  codigo: ["reactjs", "css3", "express", "nodejs", "mongodb", "firebase", "git", "github", "heroku", "npm"],

  mini: ["python", "numpy", "pandas", "vscode"],
  "saideep classes": ["nextjs", "nodejs", "npm", "mongodb", "github", "linux", "heroku", "css3", "javascript", "express", "vscode"],
  "sorting visualizer": ["javascript", "html5", "css3", "github", "vscode"],
  "pathfinding visualizer": ["reactjs", "css3", "tailwindcss", "github", "vscode"],
};
const getDetailedTechStackObjectArray = title => {
  return techStackHash[title].map(eachPartName => ({
    heading: eachPartName,
    // imageUrl: "profile/bhaveshmhadse.jpg",
    imageUrl: `../skills/${eachPartName}.svg`,
    description: "This One of My projects Toy codigo Wheel Loader. As Of Dimensions are 1/38 th of Original codigo few Dimensions were of my own and remaining were from search...! There are 14-16 TechStack as follows  Rear Body, Differential, Front Body, Axle Rod, Boom Cylinder, Boom Rod, Connecting Rod, Rocker arm Cylinder, Rocker Arm Rod, Rocker Arm, Screw, BOOM, Excavator Bucket, Rim, Tyre, and 3 Minor Assembly + 1 full Assembly",
  }));
};

const projectsAndTechStack = {
  codigo: getDetailedTechStackObjectArray("codigo"),
  mini: getDetailedTechStackObjectArray("mini"),
  "sorting visualizer": getDetailedTechStackObjectArray("sorting visualizer"),
  "pathfinding visualizer": getDetailedTechStackObjectArray("pathfinding visualizer"),
  "saideep classes": getDetailedTechStackObjectArray("saideep classes"),
};

export { projectsArray, projectsAndTechStack, techStackHash };
