'use strict';

const images = [ 
  'assets/images/emoji-avatar.png', 
  'assets/images/headshot.jpg', 
]; 

let currentIndex = 0; 
let isFlipped = false;

function changeImage() { 
  const slideshow = document.getElementById('slideshow'); 
  const container = document.getElementById('slideshow-container');
  currentIndex = (currentIndex + 1) % images.length; 
  slideshow.style.transform = `rotateY(${isFlipped ? 0 : -180}deg)`;
  setTimeout(() => { 
      slideshow.src = images[currentIndex]; 
      isFlipped = !isFlipped;
  }, 300);
} 

setInterval(changeImage, 2500);

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

window.addEventListener('resize', function() {
  if (window.innerWidth > 1250) {
    sidebar.classList.remove('active');
  }
});

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
});

const projects = [
  {
    id: 'loki-project',
    title: "Loki Mobile Application",
    image: "./assets/images/loki-project.jpg", 
    description: [
      "Loki is a mobile app and platform that connects small businesses with consumers through verified reviews, making it easier for people to discover reliable local services.",
      "The app supports businesses like barbers, babysitters, and tutors by increasing their visibility and building trust within their communities.",
      "Consumers can quickly find trusted services, helping create a stronger local economy and promoting community engagement.",
      "Loki provides businesses with tools like promotional posts, service listings, and customer feedback to help them grow and engage with customers.",
      "Key features include review systems, notifications, and an intuitive platform that enhances business-to-customer interactions."
    ],
    technologies: ["React Native", "TypeScript", "Axios", "PostgreSQL", "Docker", "TypeORM", "Postman"],
    lessons: [
      { heading: "User-Centric Features", description: "Developed features tailored to small businesses and consumers based on user feedback." },
      { heading: "Scalable Backend", description: "Designed a backend to support user growth, optimizing queries and handling heavy traffic." },
      { heading: "Performance Optimization", description: "Conducted load tests to identify and fix bottlenecks, ensuring system efficiency." },
      { heading: "Remote Team Collaboration", description: "Kept a remote team aligned through clear communication and regular sprint meetings." },
      { heading: "Task Management", description: "Assigned tasks based on strengths, improving execution and meeting deadlines." }
    ],
    links: [
      { label: "Barrett Thesis", url: "https://hdl.handle.net/2286/R.2.N.193129" }
    ]
  },
  {
    id: 'lotus-project',
    title: "Lotus Addiction Therapy",
    image: "./assets/images/lotus-project.jpg", 
    description: [
      "Lotus Addiction Therapy is a website and mobile application that provides accessible and flexible mental health care for individuals dealing with addiction.",
      "The platform allows clients to connect with licensed counselors from anywhere, overcoming geographic barriers.",
      "Features include scheduling therapy sessions, accessing educational content, and personalized treatment plans.",
      "Users can subscribe to pay-per-session models, offering flexibility for those who need therapy without long-term commitments.",
      "Key user types include administrators and operational personnel, who manage user analytics, assign counselors to clients, and view platform statistics."
    ],
    technologies: ["React Native", "TypeScript", "PostgreSQL", "AWS Amplify", "Expo EAS", "Google Play Console", "App Store Connect"],
    lessons: [
      { heading: "App Deployment", description: "Managed deployment and complete submission process to both the App Store and Google Play, ensuring adherence to platform-specific requirements and security/privacy guidelines]." },
      { heading: "Cross-Platform Testing", description: "Improved app performance/stability and user experience by testing across both iOS and Android platforms with device simulators." },
      { heading: "Bug Resolution", description: "Resolved critical bugs related to incorrectly implemented features and non-functioning components, including authentication flows and third-party integrations." },
      { heading: "Team Management", description: "Led a remote team, overseeing code reviews and pull requests to continuous delivery through GitHub." }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/lotus/id6468979690" }
    ]
  },
  {
    id: 'cloud-computing-project-2',
    title: "Serverless Video Processing",
    image: "./assets/images/cloud-computing-project-2.jpg",
    description: [
      "This cloud-based application automates the process of splitting videos into frames and performing face recognition using a serverless AWS architecture.",
      "The system starts when a video is uploaded to an S3 input bucket which invokes the video splitting Lambda function",
      "The output frames are stored in another S3 bucket which invokes the face recognition Lambda function that identifies individuals with the pre-trained machine learning model."
    ],
    technologies: ["Python", "Boto3", "AWS S3", "AWS Lambda", "Amazon Cloudwatch", "AWS IAM", "AWS ECR", "Docker"],
    lessons: [
      { heading: "Serverless Event-Driven Architecture", description: "Learned how to build a serverless, event-driven pipeline using AWS Lambda and S3 bucket triggers to automate video processing and facial recognition." },
      { heading: "Dockerized Lambda Functions", description: "Containerized video splitting and face recognition services using Docker to ensure smooth scalability and streamlined deployment of the Lambda functions." },
      { heading: "Efficient Data Storage and Retrieval", description: "Utilized multiple S3 buckets to store input videos, intermediate frames, and output face recognition results, ensuring the smooth flow of data between each processing step." },
      { heading: "Resource Optimization", description: "Implemented autoscaling for Lambda functions, allowing the system to handle variable loads by dynamically scaling based on the number of files uploaded to the S3 buckets." }
    ]
  },
  {
    id: 'cloud-computing-project-1',
    title: "Cloud-Driven Face Recognition",
    image: "./assets/images/cloud-computing-project-1.jpg", 
    description: [
      "This cloud-based application is a multi-tier face recognition service built with AWS infrastrucutre that dynamically scales to meet user demand.",
      "Key features include asynchronous processing, automatic scaling of server instances, and integration with AWS services to optimize performance and minimize costs.",
      "The Web Tier of the system is responsible for handling incoming HTTP requests and sending back results, and the App Tier, run on AWS EC2 Instances, performs facial recognition using the pre-trained machine learning model.", 
      "These tiers communicate asynchronously via AWS SQS, while images are stored and retrieved from AWS S3 for processing, ensuring smooth and efficient data transfer between the tiers."
    ],
    technologies: ["Python", "Boto3", "AWS S3", "AWS EC2", "AWS SQS", "AWS IAM"],
    lessons: [
      { heading: "AWS Infrastructure Management", description: "Gained hands-on experience with various AWS services including IAM, EC2, S3, and SQS for building cloud-native applications." },
      { heading: "Scalable Architecture", description: "Implemented custom autoscaling logic to dynamically launch and terminate App Tier instances based on workload, conserving resources during low demand periods and handling concurrent requests during high traffic periods." },
      { heading: "Machine Learning Integration", description: "Integrated the pre-trained deep learning model for facial recognition, optimizing its performance in cloud-based environments." }
    ]
  },
  {
    id: 'autonomous-driving-project',
    title: "Autonomous Driving Agent Simulation",
    image: "./assets/images/autonomous-driving-project.jpg",
    description: [
      "This project involves developing AI agents that navigate a highway, avoiding collisions through techniques such as reflex-based actions, expectimax, and reinforcement learning.",
      "The environment simulates real-world driving challenges, where the agents are tasked with safely reaching the end of the road.",
      "The goal is to explore different decision-making processes, from reactive behavior to learning from past experiences."
    ],
    technologies: ["Python", "Artificial Intelligence Agents", "Reinforcement Learning"],
    lessons: [
      { heading: "AI Problem Solving", description: "Learned how different AI algorithms, from simple reflex agents to complex reinforcement learning models, solve navigation problems in real-time environments." },
      { heading: "Decision Optimization", description: "Developed strategies that balance immediate decisions with long-term outcomes to navigate obstacles and optimize overall performance." }
    ]
  },
  {
    id: 'ghostbusters-project',
    title: "Ghostbusters Probabilistic Inference",
    image: "./assets/images/ghostbusters-project.jpg",
    description: [
      "This project focuses on using probabilistic inference techniques to track the position of invisible ghosts in a Pacman-style game environment.",
      "Pacman uses noisy sensor readings to estimate the position of ghost agents using Bayesian Networks and make strategic moves to hunt them.",
      "The project implements both exact and approximate inference methods, including particle filtering, to track ghosts over time and adjust Pacman’s actions accordingly."
    ],
    technologies: ["Python", "Bayesian Networks"],
    lessons: [
      { heading: "Probabilistic Modeling", description: "Explored the application of probabilistic models to handle uncertainty in game environments, enhancing strategic decision-making." },
      { heading: "Decision Making", description: "Balanced the trade-off between accuracy and computational efficiency to help Pacman make optimal decisions based on probabilistic models." },
      { heading: "Handling Uncertainty", description: "Implemented particle filtering to improve the efficiency of tracking moving ghosts, even under uncertainty." }
    ]
  },
  {
    id: 'reinforcement-learning-project',
    title: "Pacman Reinforcement Learning",
    image: "./assets/images/reinforcement-learning-project.jpg",
    description: [
      "This project explores reinforcement learning algorithms to train Pacman agents to navigate game environments and make decisions based on rewards.",
      "Techniques like value iteration, Q-learning, and epsilon-greedy are implemented to enable Pacman to learn and optimize its path through the maze.",
      "The project evaluates the performance of these learning methods in different game conditions."
    ],
    technologies: ["Python", "Reinforcement Learning", "Value Iteration", "Q-Learning", "Epsilon-Greedy"],
    lessons: [
      { heading: "Reinforcement Learning", description: "Applied reinforcement learning techniques to train the Pacman agent to make decisions based on rewards, enabling the agent to improve its performance through trial and error." },
      { heading: "Parameter Tuning", description: "Tuned parameters such as learning rate and discount factor to optimize the learning process, ensuring faster convergence and better decision-making by the agent." },
      { heading: "Policy Evaluation", description: "Evaluated the effectiveness of different policies generated by the learning algorithms, analyzing their performance in various game conditions." }
    ]
  },
  {
    id: 'wumpus-project',
    title: "Wumpus Logic Agent",
    image: "./assets/images/wumpus-project.jpg",
    description: [
      "This project involves building a propositional logic agent capable of solving a variant of the Hunt the Wumpus game.",
      "The agent uses a knowledge base built from propositional logic to make decisions, navigating the Wumpus cave while avoiding hazards like pits and the Wumpus.",
      "The goal is to collect gold and exit the cave, with the agent relying on logical inference to determine safe paths."
    ],
    technologies: ["Python", "Propositional Logic"],
    lessons: [
      { heading: "Knowledge Base Construction", description: "Developed a propositional logic-based knowledge base for reasoning about the Wumpus environment and agent actions." },
      { heading: "Logical Inference", description: "Implemented inference mechanisms using propositional logic to allow the agent to make decisions based on the environment’s percepts." },
      { heading: "Algorithm Optimization", description: "Enhanced performance by fine-tuning the logic system to ensure efficient decision-making while navigating the environment." }
    ]
  },
  {
    id: 'multi-agent-project',
    title: "Multi-Agent Adversarial Search",
    image: "./assets/images/multi-agent-project.jpg", 
    description: [
      "This project involves the multi-agent environment where the Pacman agent navigates the maze while maximizing rewards and minimizing risks against ghost agents.",
      "Adversarial search algorithms including Minimax, Alpha-Beta Pruning, and Expectimax were implemented to determine Pacman agent actions that avoid ghost agents."
    ],
    technologies: ["Python", "Adversarial Search", "Minimax", "Alpha-Beta Pruning", "Expectimax"],
    lessons: [
      { heading: "Evaluation Function Design", description: "Developed custom evaluation functions that balance short-term survival with long-term goals, considering both immediate rewards and future consequences." },
      { heading: "AI Strategy Development", description: "Explored trade-offs between computational complexity and gameplay effectiveness, tuning algorithm to optimize Pacman's performance against ghost agents." }
    ]
  },
  {
    id: 'pacman-search-project',
    title: "Pacman Agent Search",
    image: "./assets/images/pacman-search-project.jpg",
    description: [
      "This project involves implementing search algorithms for Pacman agents to navigate through the game framework efficiently.",
      "The game uses algorithms such as depth-first search, breadth-first search, uniform cost search, and A* search to solve challenges such as collecting food or finding paths.",
      "The goal is to explore how different search strategies perform under varying game conditions, balancing speed and accuracy."
    ],
    technologies: ["Python", "Depth First Search", "Breadth First Search", "Uniform Cost Search", "A* Search"],
    lessons: [
      { heading: "Algorithm Performance Tuning", description: "Fine-tuned search algorithms to ensure quick responses to player inputs while maintaining accuracy in Pacman's movements." },
      { heading: "Comparative Analysis", description: "Performed a comparative analysis of different search strategies, identifying trade-offs in terms of speed and accuracy." },
      { heading: "Handling Edge Cases", description: "Developed solutions to handle edge cases, ensuring that the agent could still perform optimally under challenging conditions." }
    ]
  },
  {
    id: 'recursive-descent-project',
    title: "Top-Down Recursive Descent Parser",
    image: "./assets/images/recursive-descent-project.jpg",
    description: [
      "This project involves creating a top-down recursive descent parser for a custom language with nested scopes and symbol tables.",
      "The parser processes a grammar with public and private variables, resolving names according to lexical scoping rules and producing the correct output for variable references.",
      "The project also integrates a lexical analyzer for token recognition and handles complex cases such as nested scopes and symbol resolution."
    ],
    technologies: ["C++", "Lexical Analyzer", "Recursive Descent Parsing"],
    lessons: [
      { heading: "Lexical and Syntactical Parsing", description: "Implemented lexical and syntactical parsers that correctly interpret and process nested scopes and variable assignments." },,
      { heading: "Parser Construction", description: "Learned how to implement a recursive descent parser for a custom grammar, managing lexical scopes and symbol tables." },
      { heading: "Scoping and Name Resolution", description: "Developed an understanding of lexical scoping rules and how to resolve variable references in nested scopes." }
    ]
  },
  {
    id: 'simple-language-compiler-project',
    title: "Simple Language Compiler",
    image: "./assets/images/simple-language-compiler-project.jpg",
    description: [
      "This project implements a mini-compiler for a simple language, designed to read input programs and generate a linked list of instructions as an intermediate code representation.",
      "The compiler supports basic language features like variables, arithmetic operations, and control flow statements such as if, while, and for loops.",
      "The generated intermediate code is then interpreted to execute the program, providing an efficient way to run small-scale programs."
    ],
    technologies: ["C++", "Compilers"],
    lessons: [
      { heading: "Compiler Architecture", description: "Designed the architecture of a small compiler to handle parsing, intermediate code generation, and program execution using an interpreter." },
      { heading: "Code Parsing", description: "Implemented a parser that converts input code into a structured sequence of executable instructions, learning to handle various programming constructs." },
      { heading: "Execution Semantics", description: "Learned the execution semantics of a simple programming language, ensuring correct behavior for different control flow and loop statements." }
    ]
  },
  {
    id: 'context-free-grammar-project',
    title: "Context-Free Grammar Parser",
    image: "./assets/images/context-free-grammar-project.jpg",
    description: [
      "This project involves designing a parser to analyze context-free grammars, focusing on tasks like identifying terminals and non-terminals, calculating FIRST and FOLLOW sets, and checking for predictive parsers.",
      "The system reads grammar inputs and processes them to perform various analysis tasks, including removing useless symbols and determining if the grammar supports a predictive parser."
    ],
    technologies: ["C++", "Context-Free Grammar", "Parsing"],
    lessons: [
      { heading: "Grammar Parsing", description: "Learned how to construct and optimize a parser to ensure accurate analysis of grammar structures while avoiding recursive bottlenecks." },
      { heading: "Set Calculations", description: "Developed methods to calculate FIRST and FOLLOW sets for context-free grammars, ensuring correctness in the parsing process." }
    ]
  },
  {
    id: 'lexical-analysis-project',
    title: "Token-Based Lexical Analysis",
    image: "./assets/images/lexical-analysis-project.jpg",
    description: [
      "This project extends an existing lexical analyzer to support new token types such as real numbers, base-8, and base-16 numbers.",
      "By adding these capabilities, the analyzer is equipped to handle a wider range of inputs, improving its versatility in lexical analysis tasks.",
      "This project highlights the critical role of lexical analysis in transforming source code into tokens for subsequent compilation stages."
    ],
    technologies: ["C++", "Compilers", "Lexical Analysis", "Tokenization"],
    lessons: [
      { heading: "Lexical Processing", description: "Enhanced the lexical analyzer to handle more sophisticated tokens, increasing its ability to process different number formats and real numbers." },
      { heading: "Compiler Fundamentals", description: "Developed a stronger understanding of compiler architecture by working on the lexical analysis phase, where source code is transformed into meaningful tokens." }
    ]
  },
  {
    id: 'sundevil-pizza-project',
    title: "SunDevil Pizza Store Management System",
    image: "./assets/images/sundevil-pizza-project.jpg",
    description: [
      "This desktop application automates the process of pizza ordering, preparation, and customer notification for the SunDevil Pizza Store.",
      "The system enables students to place orders, customize pizzas, and track the progress of their order in real-time.",
      "The order management workflow includes order placement, processing, cooking, and notification of order completion."
    ],
    technologies: ["JavaFX"],
    lessons: [
      { heading: "Collaborative Development", description: "Worked in a team-based environment to build and integrate different components of the system across multiple phases." },
      { heading: "User-Friendly Interface Design", description: "Designed and implemented a graphical user interface using JavaFX that simplifies the pizza ordering process for students." },
      { heading: "System Design Diagrams", description: "Created entity-relationship diagrams to define relationships between customers, orders, and pizzas, and used Astah UML diagrams to design the system architecture and ensure accurate implementation and testing." },
      { heading: "Functional Testing", description: "Performed functional testing across multiple phases to validate features, ensuring a smooth and error-free experience for users." }
    ]
  }
];

function getProjectById(id) {
  return projects.find(project => project.id === id);
}

function openModal(project) {

  document.getElementById('modal-title').innerText = project.title;
  document.querySelector('.modal-img img').src = project.image;

  document.getElementById('modal-description').innerHTML = project.description.map(desc => `<li>${desc}</li>`).join('');
  document.getElementById('modal-technologies').innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');

  const lessonsContainer = document.getElementById('modal-lessons');
  lessonsContainer.innerHTML = '';

  project.lessons.forEach(lesson => {
    const lessonItem = document.createElement('li');

    const lessonHeading = document.createElement('strong');
    lessonHeading.innerText = lesson.heading;
    
    const lessonDescription = document.createElement('p');
    lessonDescription.innerText = lesson.description;

    lessonItem.appendChild(lessonHeading);
    lessonItem.appendChild(lessonDescription);

    lessonsContainer.appendChild(lessonItem);
  });

  const linksContainer = document.getElementById('modal-links');
  linksContainer.innerHTML = '';
  if (project.links && project.links.length > 0) {
    project.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.innerText = link.label;
      anchor.classList.add('project-link');
      linksContainer.appendChild(anchor);
    });
  }

  const modal = document.getElementById('project-modal');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
}

document.getElementById('project-modal').addEventListener('click', function(event) {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
});

document.getElementById('close-modal').addEventListener('click', closeModal);

document.querySelectorAll('.project-item a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const projectId = event.currentTarget.getAttribute('data-project-id');
    const project = getProjectById(projectId);
    
    if (project) {
      openModal(project);
    }
  });
});