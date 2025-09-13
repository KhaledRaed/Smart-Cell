document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe animated elements
            document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-scale').forEach(el => {
                observer.observe(el);
            });

            // Enhanced Video handling
            const video = document.querySelector('.our-view-video');
            const playBtn = document.getElementById('videoPlayBtn');
            let isPlaying = false;
            
            if (video && playBtn) {
                // Play button click handler
                playBtn.addEventListener('click', function() {
                    if (!isPlaying) {
                        video.play().then(() => {
                            playBtn.style.opacity = '0';
                            playBtn.style.pointerEvents = 'none';
                            isPlaying = true;
                        }).catch(error => {
                            console.log('Video play failed:', error);
                        });
                    }
                });

                // Video intersection observer
                const videoObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Auto-play only if user hasn't manually played
                            if (!isPlaying && video.paused) {
                                setTimeout(() => {
                                    video.play().then(() => {
                                        playBtn.style.opacity = '0';
                                        playBtn.style.pointerEvents = 'none';
                                        isPlaying = true;
                                    }).catch(error => {
                                        console.log('Auto-play failed, showing play button');
                                    });
                                }, 1000);
                            }
                        } else {
                            video.pause();
                            playBtn.style.opacity = '1';
                            playBtn.style.pointerEvents = 'auto';
                            isPlaying = false;
                        }
                    });
                }, {
                    threshold: 0.5
                });
                
                videoObserver.observe(video);

                // Video ended event
                video.addEventListener('ended', function() {
                    playBtn.style.opacity = '1';
                    playBtn.style.pointerEvents = 'auto';
                    isPlaying = false;
                    video.currentTime = 0;
                });

                // Handle visibility change
                document.addEventListener('visibilitychange', function() {
                    if (document.hidden && isPlaying) {
                        video.pause();
                    }
                });
            }

            // Smooth number counting for stats
            function animateNumbers() {
                const statNumbers = document.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    
                    if (number && number > 1000) { // Only animate large numbers
                        let current = 0;
                        const increment = number / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                stat.textContent = text;
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
                            }
                        }, 40);
                    }
                });
            }

            // Trigger number animation when stats come into view
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(animateNumbers, 500);
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsRow = document.querySelector('.stats-row');
            if (statsRow) {
                statsObserver.observe(statsRow);
            }
        });

// Initialize video quality handling if needed
// Uncomment the line below if you want to handle video quality based on connection
// handleVideoQuality();