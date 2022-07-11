const accent = "lightblue";

const databases = ["postgresql", "firebase"];
const languages = ["javascript", "python", "typescript", "golang", "java", "c++", "c", "dart"];
const toolsAndFrameworks = ["reactjs", "nextjs", "tailwindcss", "linux", "nodejs", "npm", "express", "mongodb", "firebase", "heroku", "docker", "chrome", "angularjs", "flutter", "flask", "storybook", "git", "github", "css3", "html5"];

const Skills = {
  languages: languages.map(title => ({ title })),
  frameworks: toolsAndFrameworks.map(title => ({ title })),
  databases: databases.map(title => ({ title })),
};

export { Skills, accent };
