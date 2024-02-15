const menuButton = document.querySelector("#menuButton");
const barNav = document.querySelector("#barNav");
const jumbotron = document.querySelector(".jumbotron");

// toggle responsive navbar
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
      entry.target.classList.add('fade-right');
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

function updateStickyPosition() {
  const stickyElement = document.querySelector('aside');
  const scrollTop = window.scrollY;
  stickyElement.style.top = ((10 + scrollTop) / 3) + 'px';
}

function handleScroll(){
  parallaxEffect()
  updateStickyPosition()
}
window.addEventListener('wheel', handleScroll, {passive: true});
window.addEventListener('scroll', handleScroll, {passive: true});