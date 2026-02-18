// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    reset: false
});

// Staggered reveals for cards
sr.reveal('.hero-text', { delay: 300, origin: 'left' });
sr.reveal('.hero-img', { delay: 500, origin: 'right', scale: 0.9 });
sr.reveal('.card', { interval: 150 });
sr.reveal('.tag', { interval: 100, delay: 600 });
sr.reveal('h2', { delay: 100 });

// Subtle Mouse Move Effect for Background Blobs
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelectorAll('.blob').forEach((blob, index) => {
        const factor = (index + 1) * 20;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    }
        });
    }, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});
