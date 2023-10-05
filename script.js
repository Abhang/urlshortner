// Smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for the header text
document.addEventListener('DOMContentLoaded', function () {
    const headerText = document.querySelector('header p');
    headerText.style.animation = 'fadeIn 2s forwards';
});
