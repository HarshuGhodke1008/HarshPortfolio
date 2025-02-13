// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!contactForm.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        contactForm.classList.add('was-validated');
    });
}

// Skills animation
const skillBars = document.querySelectorAll('.skill-progress .progress-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = value + '%';
    });
};

// Trigger skill animation when section is in view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
});

if (skillsSection) {
    observer.observe(skillsSection);
}

// Handle flash messages
const flashMessages = document.querySelectorAll('.alert');
flashMessages.forEach(message => {
    setTimeout(() => {
        message.classList.add('fade');
        setTimeout(() => message.remove(), 300);
    }, 3000);
});
