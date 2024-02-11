// navbar mobile

const linkNav = document.querySelector(".linkNav");
const barNav = document.querySelector("#barNav");
const jumbotron = document.querySelector(".jumbotron");

linkNav.addEventListener('click',function(){
  barNav.classList.toggle('flex');
});

const realImg = new Image();
document.addEventListener('DOMContentLoaded', function() {
  const blurImg = jumbotron.querySelector('.blurred-img')

  realImg.onload = () => {
    jumbotron.appendChild(realImg)
    jumbotron.removeChild(blurImg);
  }
  
  realImg.src = 'assets/img/bogor-banner.webp'; // Path to the real image
  realImg.srcset = 'assets/img/bogor-banner-small.webp 400w, assets/img/bogor-banner-medium.webp 1000w, assets/img/bogor-banner.webp 1200w'
  realImg.alt = 'bogor'
  realImg.sizes = "(min-width: 400px) 100vw, 1200px"
});

function setResponsiveImage() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth <= 600) {
    realImg.src = "assets/img/bogor-banner-small.webp";
  } else if(viewportWidth <= 1000 ) {
    realImg.src = "assets/img/bogor-banner-medium.webp"; 
  } else {
    realImg.src = "assets/img/bogor-banner.webp"; // Path to large image
  }
}

// Call the function initially to set the image based on the initial viewport width
setResponsiveImage();

// Add event listener for viewport size change
window.addEventListener('resize', setResponsiveImage);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the element is in view, add the 'animate' class to trigger the animation
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}
  // Create a new Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Get all elements with the 'typewriter' class
const typewriters = document.querySelectorAll('.typewriter');

// Iterate over each element and observe it
typewriters.forEach(typewriter => {
  observer.observe(typewriter);
});