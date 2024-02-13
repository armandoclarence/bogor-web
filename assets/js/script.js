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

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`; 
});

const stickyElement = document.querySelector('aside');

  // Calculate the initial offset of the sticky element
  const stickyOffset = stickyElement.getBoundingClientRect().top;

  // Update the top position of the sticky element based on the scrolling position
  function updateStickyPosition() {
    const scrollTop = window.scrollY;
    stickyElement.style.top = ((10 + scrollTop) /3) + 'px';
  }

  // Attach an event listener to the scroll event
  window.addEventListener('scroll', updateStickyPosition);