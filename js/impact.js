 function switchLayout(layout) {
            const gridLayout = document.getElementById('gridLayout');
            const horizontalLayout = document.getElementById('horizontalLayout');
            const toggleBtns = document.querySelectorAll('.toggle-btn');

            toggleBtns.forEach(btn => btn.classList.remove('active'));

            if (layout === 'grid') {
                gridLayout.style.display = 'grid';
                horizontalLayout.style.display = 'none';
                toggleBtns[0].classList.add('active');
            } else {
                gridLayout.style.display = 'none';
                horizontalLayout.style.display = 'grid';
                toggleBtns[1].classList.add('active');
            }

            // Re-trigger animations
            setTimeout(() => {
                animateCounters();
            }, 100);
        }

        // Compact Counter Animation
        function animateCounters() {
            const activeLayout = document.querySelector('#gridLayout').style.display !== 'none' ? 'gridLayout' : 'horizontalLayout';
            const counters = document.querySelectorAll(`#${activeLayout} .counter-number`);
            
            counters.forEach((counter, index) => {
                const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                const suffix = counter.textContent.replace(/[0-9]/g, '');
                let current = 0;
                const duration = 1500;
                const startTime = performance.now();
                
                function easeOutQuart(t) {
                    return 1 - Math.pow(1 - t, 4);
                }
                
                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutQuart(progress);
                    
                    current = Math.floor(easedProgress * target);
                    counter.textContent = current + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + suffix;
                    }
                };
                
                setTimeout(() => {
                    requestAnimationFrame(updateCounter);
                }, index * 100);
            });
        }

        // Intersection Observer
        const counterSection = document.querySelector('#impact');
        let hasAnimated = false;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                }
            });
        }, { 
            threshold: 0.5,
            rootMargin: '0px 0px -20px 0px'
        });

        counterObserver.observe(counterSection);