document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        delay: 200,
        easing: 'ease-in-out',
        reset: false
    });

    sr.reveal('.hero-content h1', { origin: 'top', distance: '50px' });
    sr.reveal('.hero-content p', { delay: 400 });
    sr.reveal('.hero-cta', { delay: 600 });

    sr.reveal('section h2', { origin: 'left' });

    sr.reveal('.benefit-item', { interval: 200 });

    sr.reveal('.menu-item', { interval: 200 });
    
    sr.reveal('.testimonial-card', { interval: 200 });

    sr.reveal('.cta-block-content', { origin: 'left', distance: '50px' });
    sr.reveal('.map-container', { origin: 'right', distance: '50px' });

    sr.reveal('footer .social-links', { delay: 300 });
    sr.reveal('footer p', { delay: 400 });

});