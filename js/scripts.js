document.addEventListener('DOMContentLoaded', function() {
    // Function to add a visual 'data' marker to section titles
    function addDataMarker() {
        const titles = document.querySelectorAll('.section-title');
        titles.forEach((title, index) => {
            // Generate a random, data-science-friendly floating point number
            // e.g., 1.0, 2.0, 3.0, etc., but slightly randomized
            const base = index + 1;
            const decimal = Math.floor(Math.random() * 99);
            const dataNumber = `${base}.${decimal.toString().padStart(2, '0')}`;

            const marker = document.createElement('span');
            marker.textContent = `[ ${dataNumber} ]`;
            marker.classList.add('data-marker');
            
            // Add a brief animation/style on load
            setTimeout(() => {
                 title.prepend(marker);
            }, 100);
        });
    }

    addDataMarker();

    // Intersection Observer for subtle scroll effects (optional, but professional)
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add a class for elements that should animate on scroll
    document.querySelectorAll('.expertise-card, .project-card, .credential-card').forEach(element => {
        element.classList.add('fade-in-scroll');
        observer.observe(element);
    });

});