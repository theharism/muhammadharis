import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nuces,
  sayabidev,
  cpp,
  firebase,
  matplotlib,
  numpy,
  pandas,
  python,
  pytorch,
  sagemaker,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  upwork,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },

  {
    name: "c/c++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "pyTorch",
    icon: pytorch,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws sagemaker",
    icon: sagemaker,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "July 2023 - continue",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - continue",
    points: [
      "Developing and maintaining moile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform (android & ios) compatibility.",
    ],
  },
  {
    title: "AI & Data Science Trainee",
    company_name: "SayabiDevs",
    icon: sayabidev,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Creation of machine learning models using Python and other associated technologies.",
      "Engaged in tasks involving data cleaning, data visualization, and data preprocessing.",
      "Collaborating with other developers to create high-quality products.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "FAST NUCES Lahore",
    icon: nuces,
    iconBg: "#383E56",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Offering guidance to students on understanding and applying digital logic principles, troubleshooting circuit designs, and utilizing simulation software.",
      "Assisting in grading assignments and providing valuable feedback to help students improve their understanding and performance in the course.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make an app as beautiful as our product, but Haris proved me wrong.",
    name: "Saad Naeem",
    designation: "CEO",
    company: "Itish Studios",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Shera Ai",
    description:
      "Cross platform Ai app that Combines The Functionalities Of A Chat Bot And An Ai Image Generator.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    //image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sapre",
    description:
      "A weekly sales predictor python script using RandomForestRegressor and XGBRegressor ML models",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    //image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beauco",
    description:
      "An ecommerce recommendation system based on Collaborative Filtering uses NearestNeighbors from scikit-learn",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dave",
    description:
      "An AI powered chatbot using deep learning and natural language processing",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyTorch",
        color: "green-text-gradient",
      },
      {
        name: "RNN",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dog-Breed-Identifier-using-Deep-Learning",
    description:
      "A deep learning based model for classifying images as dogs and identifying their breed",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyTorch",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Planck",
    description:
      "A startup based on Ai for Delivering groceries under 10 minutes using environment friendly vehicles",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "pyTorch",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
