// Smooth scroll effect for anchor links with slide-in animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Add a class to trigger the slide-in animation
        targetSection.classList.add('slide-in');
    });
});

// Fade-in animation for the header text
document.addEventListener('DOMContentLoaded', function () {
    const headerText = document.querySelector('header p');
    headerText.style.animation = 'fadeIn 2s forwards';
});
