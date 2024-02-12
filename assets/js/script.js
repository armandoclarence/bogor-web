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
  parallax.style.transform = 'translateY(' + (scrolled * 0.5  ) + 'px)'; // Adjust the factor for the parallax effect
});