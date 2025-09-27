 document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up').forEach(el => {
                observer.observe(el);
            });

            // Animate numbers for stats
            function animateNumber(el, target) {
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target + (el.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current) + (el.textContent.includes('+') ? '+' : '');
                    }
                }, 30);
            }

            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.stat-number').forEach(stat => {
                            const num = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                            if (!isNaN(num)) animateNumber(stat, num);
                        });
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsRow = document.querySelector('.stats-row');
            if (statsRow) statsObserver.observe(statsRow);
        });