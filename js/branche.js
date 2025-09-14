 // Scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade elements
        document.addEventListener('DOMContentLoaded', () => {
            // Start animations immediately for header elements
            setTimeout(() => {
                const badge = document.querySelector('.branches-badge');
                const title = document.querySelector('.branches-title');
                const subtitle = document.querySelector('.branches-subtitle');
                
                if (badge) badge.style.animationPlayState = 'running';
                if (title) title.style.animationPlayState = 'running';
                if (subtitle) subtitle.style.animationPlayState = 'running';
            }, 300);

            const fadeElements = document.querySelectorAll('.branch-panel.fade-element');
            fadeElements.forEach((element) => {
                observer.observe(element);
            });
        });