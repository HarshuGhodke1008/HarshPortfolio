
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

// Form validation and submission
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
        this.classList.add('was-validated');
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
