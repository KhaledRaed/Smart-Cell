// Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate stat numbers
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        animateNumber(stat);
                    });
                }
            });
        }, observerOptions);

        // Observe all fade elements
        document.querySelectorAll('.fade-element').forEach(el => {
            observer.observe(el);
        });

        // Number animation function
        function animateNumber(element) {
            const target = parseInt(element.textContent.replace(/\D/g, ''));
            const suffix = element.textContent.replace(/[\d,]/g, '');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current).toLocaleString();
                if (suffix) {
                    displayValue += suffix;
                }
                element.textContent = displayValue;
            }, 16);
        }

        // Add smooth scrolling for any internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });