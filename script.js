document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll en el Header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.transition = 'background-color 0.5s ease';
            header.style.backgroundColor = 'rgba(26, 0, 5, 0.98)'; 
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // 2. Animación de "Aparición Suave" (Fade-in)
    // Seleccionamos todas las secciones que queremos que tengan el efecto
    const sections = document.querySelectorAll('.content-section, #musica, #video-performance, #contacto, #bio');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                // Opcional: una vez visible, dejamos de observarla
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.12, // Un punto medio ideal
    });

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});
