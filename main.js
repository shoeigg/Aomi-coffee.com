document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // 3. Scroll Animation with Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Initial trigger for hero content
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible');
    }, 300);

    // 4. Background Particles (Spirits)
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize properties
        const size = Math.random() * 4 + 1; // 1px to 5px
        const left = Math.random() * 100; // 0% to 100%
        const animationDuration = Math.random() * 15 + 10; // 10s to 25s
        const animationDelay = Math.random() * 10; // 0s to 10s
        const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.animationDuration = `${animationDuration}s, ${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s, ${animationDelay}s`;
        
        // Optional color variance 
        if (Math.random() > 0.7) {
            particle.style.boxShadow = '0 0 10px 2px #9d4edd'; // purple accent
        }
        
        particleContainer.appendChild(particle);
    }
});
