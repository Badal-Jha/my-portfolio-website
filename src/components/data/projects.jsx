const projects = [
  {
    id: 1,
    title: "Portfolio website",
    about:
      "This is my personal portfolio website build usin Reactjs and hosted on google firebase",
    tags: ["ReactJS", "JS", "Firebase", "html", "css"],
    demo: "",
    github: "https://github.com/Badal-Jha/my-portfolio-website",
    image: require("../../assets/projectImages/portfolio.png").default,
  },
  {
    id: 2,
    title: "Covid Tracker",
    about: "You can see real time covid data of different states of india.",
    tags: ["javascript", "NodesJS", "Express", "MongoDB"],
    demo: "",
    github: "https://github.com/Badal-Jha/Covid-Tracker",
    image: require("../../assets/projectImages/covidApp.png").default,
  },
  {
    id: 3,
    title: "Blockchain Based Voting machine",
    about:
      "This is a decentrilised voting machine based on etherium blockchain. Means This system is fully secured as a person or a specific party cannot able to change the votes and if they try to change the data all the other nodes will be able to see it in their node. There is a client side application that will talk to the smart contract written by me ",
    tags: ["Etherium", "Solidity", "Web3.js", "NodesJS", "Express"],
    demo: "",
    github: "https://github.com/Badal-Jha/Covid-Tracker",
    image: require("../../assets/projectImages/election.png").default,
  },
  {
    id: 4,
    title: "Movie App",
    about: "This is a simple website to see reviews and rating of movies",
    tags: ["Javascript", "NodesJS", "Express"],
    demo: "",
    github: "https://github.com/Badal-Jha/Movie-App",
    image: require("../../assets/projectImages/movieApp.png").default,
  },
];
export default projects;
