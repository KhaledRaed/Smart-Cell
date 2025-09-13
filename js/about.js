document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});