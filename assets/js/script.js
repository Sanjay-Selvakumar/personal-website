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
      { label: "Barrett Thesis", url: "https://hdl.handle.net/2286/R.2.N.193129" },
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
      "Key user types include administrators and operational personnel, who manage user analytics, assign counselors to clients, and view platform statistics.",
    ],
    technologies: ["React Native", "TypeScript", "PostgreSQL", "AWS Amplify", "Expo EAS", "Google Play Console", "App Store Connect"],
    lessons: [
      { heading: "App Deployment", description: "Managed deployment and complete submission process to both the App Store and Google Play, ensuring adherence to platform-specific requirements and security/privacy guidelines]." },
      { heading: "Cross-Platform Testing", description: "Improved app performance/stability and user experience by testing across both iOS and Android platforms with device simulators." },
      { heading: "Bug Resolution", description: "Resolved critical bugs related to incorrectly implemented features and non-functioning components, including authentication flows and third-party integrations." },
      { heading: "Team Management", description: "Led a remote team, overseeing code reviews and pull requests to continuous delivery through GitHub." }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/lotus/id6468979690" },
    ]
  },
  {
    id: 'cloud-computing-project-1',
    title: "Cloud-Driven Face Recognition",
    image: "./assets/images/cloud-computing-project-1.jpg", 
    description: [
      "This cloud-based application is a multi-tier face recognition service built with AWS infrastrucutre that dynamically scales to meet user demand.",
      "Key features include asynchronous processing, automatic scaling of server instances, and integration with AWS services to optimize performance and minimize costs.",
      "The Web Tier of the system is responsible for handling incoming HTTP requests and sending back results, and the App Tier, run on AWS EC2 Instances, performs facial recognition using the machine learning model.", 
      "These tiers communicate asynchronously via AWS SQS, while images are stored and retrieved from AWS S3 for processing, ensuring smooth and efficient data transfer between the tiers.",
    ],
    technologies: ["AWS EC2", "AWS S3", "AWS SQS", "AWS IAM", "Python", "Boto3"],
    lessons: [
      { heading: "AWS Infrastructure Management", description: "Gained hands-on experience with various AWS services including IAM, EC2, S3, and SQS for building cloud-native applications." },
      { heading: "Scalable Architecture", description: "Implemented custom autoscaling logic to dynamically launch and terminate App Tier instances based on workload, conserving resources during low demand periods and handling concurrent requests during high traffic periods." },
      { heading: "Machine Learning Integration", description: "Integrated a pre-trained deep learning model for facial recognition, optimizing its performance in cloud-based environments." }
    ],
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