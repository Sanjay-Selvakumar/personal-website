'use strict';

const images = [ 
  'assets/images/emoji-avatar.png', 
  // 'assets/images/project-2.png', 
]; 

let currentIndex = 0; 
let isFlipped = false;

function changeImage() { 
  const slideshow = document.getElementById('slideshow'); 
  currentIndex = (currentIndex + 1) % images.length; 
  slideshow.style.transform = `rotateY(${isFlipped ? 0 : 360}deg)`;
  setTimeout(() => { 
      slideshow.src = images[currentIndex]; 
      isFlipped = !isFlipped;
  }, 500);
} 

setInterval(changeImage, 5000);

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