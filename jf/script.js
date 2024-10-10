window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "#ffffff"; 
    } else {
      nav.style.backgroundColor = "transparent"; 
    }
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, 
      behavior: 'smooth' 
    });
  });
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; 
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');
      document.querySelector('nav ul li a.active').classList.remove('active');
      document.querySelector(`nav ul li a[href="#${currentId}"]`).classList.add('active');
    }
  });
});