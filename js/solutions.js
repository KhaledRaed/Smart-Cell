// ??? this following code is for the client card hover interaction , css implementation can get buggy with children elements

let clientCards = document.querySelectorAll(".client-card");
clientCards.forEach(card=>{
    card.addEventListener('mouseenter',handleClientCardHoverIn);
    card.addEventListener('mouseleave',handleClientCardHoverOut);
});

function handleClientCardHoverOut(event){
    let currentCard = event.currentTarget;
    let currentCardBackground = currentCard.querySelector('.client-card-background');

    currentCardBackground.classList.remove('client-card-background-hover');
}
function handleClientCardHoverIn(event){
    
    let currentCard = event.currentTarget;
    let currentCardBackground = currentCard.querySelector('.client-card-background');

    currentCardBackground.classList.add('client-card-background-hover');
}

//! this is for the temporary slide bar
// Partners Section JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            initializePartnersSection();
            handlePartnersResponsive();
            optimizePartnersPerformance();
        });

        // Main initialization function
        function initializePartnersSection() {
            console.log('Partners section initialized');
            
            enhancePartnersScrolling();
            addPartnerLogoEffects();
        }

        // Enhance scrolling behavior
        function enhancePartnersScrolling() {
            const track = document.querySelector('.partners-track');
            
            if (track) {
                track.addEventListener('mouseenter', () => {
                    track.style.animationPlayState = 'paused';
                });
                
                track.addEventListener('mouseleave', () => {
                    track.style.animationPlayState = 'running';
                });
                
                track.addEventListener('touchstart', () => {
                    track.style.animationPlayState = 'paused';
                });
                
                track.addEventListener('touchend', () => {
                    setTimeout(() => {
                        track.style.animationPlayState = 'running';
                    }, 2000);
                });
            }
        }

        // Add enhanced effects to partner logos
        function addPartnerLogoEffects() {
            const partnerLogos = document.querySelectorAll('.partner-logo');
            
            partnerLogos.forEach((logo, index) => {
                logo.style.animationDelay = `${index * 0.1}s`;
                
                logo.addEventListener('mouseenter', function() {
                    const track = this.closest('.partners-track');
                    if (track) {
                        track.style.animationPlayState = 'paused';
                    }
                    
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1.1)';
                    }
                });
                
                logo.addEventListener('mouseleave', function() {
                    const track = this.closest('.partners-track');
                    if (track) {
                        setTimeout(() => {
                            track.style.animationPlayState = 'running';
                        }, 500);
                    }
                    
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = '';
                    }
                });
            });
        }

        // Handle responsive behavior
        function handlePartnersResponsive() {
            function adjustForScreenSize() {
                const isMobile = window.innerWidth <= 768;
                const isTablet = window.innerWidth <= 1024;
                const track = document.querySelector('.partners-track');
                
                if (track) {
                    if (isMobile) {
                        track.style.animationDuration = '40s';
                        track.style.gap = '20px';
                    } else if (isTablet) {
                        track.style.animationDuration = '35s';
                        track.style.gap = '40px';
                    } else {
                        track.style.animationDuration = '30s';
                        track.style.gap = '60px';
                    }
                }
            }
            
            adjustForScreenSize();
            
            let resizeTimeout;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(adjustForScreenSize, 250);
            });
        }

        // Performance optimization
        function optimizePartnersPerformance() {
            const partnersSection = document.querySelector('.partners-section');
            
            if (!partnersSection) return;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const track = entry.target.querySelector('.partners-track');
                    
                    if (track) {
                        if (entry.isIntersecting) {
                            track.style.animationPlayState = 'running';
                        } else {
                            track.style.animationPlayState = 'paused';
                        }
                    }
                });
            }, {
                threshold: 0.1
            });
            
            observer.observe(partnersSection);
        }






// ///////////////////////////////////////////////////////
// this is for handling the projects section

let allYearsContainers = document.querySelectorAll(".year-container");

allYearsContainers.forEach(container=>{
    container.addEventListener('click',handleYearContainerClick);
});


function handleYearContainerClick(event){
    let yearContent = event.currentTarget.querySelector(".year-content");
    if (!yearContent) return;

    if (yearContent.style.maxHeight && yearContent.style.maxHeight !== "0px") {
        // Collapse
        yearContent.style.maxHeight = "0px";
        yearContent.style.padding = "0px";
        yearContent.style.opacity="0"
    } else {
        let verticalPadding = 18;
        // Expand: First set padding, then measure height
        yearContent.style.padding = `${verticalPadding}px 24px`;
        // Force a reflow to ensure padding is applied
        // yearContent.offsetHeight;


        // Now measure with padding included
        yearContent.style.maxHeight = yearContent.scrollHeight+(2 * verticalPadding) + "px";

        yearContent.style.opacity="100%"
    }
}