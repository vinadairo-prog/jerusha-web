document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll en el Header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Si bajamos más de 50px, el header se vuelve más denso y elegante
        if (window.scrollY > 50) {
            header.style.transition = 'background-color 0.5s ease';
            header.style.backgroundColor = 'rgba(26, 0, 5, 0.98)'; 
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // 2. Animación de "Aparición Suave" (Fade-in)
    // Esto hace que las secciones no aparezcan de golpe
    const sections = document.querySelectorAll('.content-section, #musica');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});