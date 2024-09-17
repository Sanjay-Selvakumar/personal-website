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

const projects = [
  {
    id: 'loki-project',
    title: "Loki Mobile Application",
    image: "./assets/images/loki-project.png", 
    description: "Loki is a mobile application tailored to the needs of small businesses and consumers...",
    technologies: [
      "React Native", "TypeScript", "Axios", "PostgreSQL", "Docker", "TypeORM", "Postman"
    ],
    lessons: [
      "Led the backend development and system design, ensuring scalability and performance optimization.",
      "Managed a team of developers, conducted weekly meetings, and organized sprint planning and retrospectives.",
      "Established coding standards and best practices to optimize database queries and reduce latency.",
      "Implemented JWT authentication for stateless session management and secure user authorization.",
      "Conducted performance testing under high traffic using Postman to ensure reliability and efficiency.",
      "Explored AWS cloud services (S3, EC2, ELB) for deployment, autoscaling, and load balancing strategies."
    ]
  },
];

// Function to find the project by its ID
function getProjectById(projectId) {
  return projects.find(project => project.id === projectId);
}

// Function to open the modal with project details
function openModal(project) {
  document.getElementById('modal-title').innerText = project.title;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-description').innerText = project.description;
  document.getElementById('modal-technologies').innerText = project.technologies.join(', ');
  document.getElementById('modal-lessons').innerText = project.lessons.join(', ');
  document.getElementById('modal').style.display = 'block';
}

// Add event listeners to all project links
document.querySelectorAll('.project-item a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const projectId = event.target.getAttribute('data-project-id');
    const project = getProjectById(projectId); // Get the corresponding project data

    if (project) {
      openModal(project);
    }
  });
});