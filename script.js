// Discover About / Skills / Contact fade-in
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Fade-in on scroll
window.addEventListener('scroll', ()=>{
    const triggerPoint = window.innerHeight / 1.2;
    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < triggerPoint){
            sec.classList.add('visible');
        }
    });
});

// Smooth scroll for nav
navLinks.forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
        target.classList.add('visible');
    });
});

// Contact form alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    Swal.fire({
        icon:'success',
        title:'Message Sent!',
        text:'Thanks for reaching out, I will get back to you soon.',
        confirmButtonColor:'#b74b4b'
    });
    contactForm.reset();
});
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); // agar section already view me ho
// Create cursor glow
const cursorGlow = document.createElement('div');
cursorGlow.classList.add('cursor-glow');
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('active');
});