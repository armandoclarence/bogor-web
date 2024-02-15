const menuButton = document.querySelector("#menuButton");
const barNav = document.querySelector("#barNav");
const jumbotron = document.querySelector(".jumbotron");

menuButton.addEventListener('click',function(){
  if (this.ariaExpanded === 'true') {
    this.ariaExpanded = false;
  } else {
  this.ariaExpanded = true;
  }
  barNav.classList.toggle('flex');
});

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const typewriters = document.querySelectorAll('.typewriter');

typewriters.forEach(typewriter => {
  observer.observe(typewriter);
});

function parallaxEffect() {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`; 
}
const stickyElement = document.querySelector('aside');

function updateStickyPosition() {
  const scrollTop = window.scrollY;
  stickyElement.style.top = ((10 + scrollTop) / 3) + 'px';
}
function smoothScroll() {
  // Calculate the scroll position
  const currentScroll = window.scrollY;

  // Update the scroll position based on your desired smoothness
  // You can adjust the easing function as needed
  const targetScroll = currentScroll + (targetScroll - currentScroll) * 0.1;

  // Apply the updated scroll position
  window.scrollTo(0, targetScroll);

  // Request another animation frame if the scroll position hasn't reached the target yet
  if (Math.abs(targetScroll - currentScroll) > 1) {
    requestAnimationFrame(smoothScroll);
  }
}

// Attach the smoothScroll function to the scroll event
window.addEventListener('scroll', smoothScroll);

function handleScroll(){
  parallaxEffect()
  updateStickyPosition()
}
window.addEventListener('wheel', handleScroll, {passive: true});
window.addEventListener('scroll', handleScroll, {passive: true});