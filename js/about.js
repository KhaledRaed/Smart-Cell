// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate stat numbers (only once per element)
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.hasAttribute('data-animated')) {
                    stat.setAttribute('data-animated', 'true');
                    animateNumber(stat);
                }
            });
        }
    });
}, observerOptions);

// Observe all fade elements
document.querySelectorAll('.fade-element').forEach(el => {
    observer.observe(el);
});

// Improved number animation function
function animateNumber(element) {
    const originalText = element.textContent.trim();
    
    // Extract number and suffix more accurately
    const numberMatch = originalText.match(/(\d+(?:,\d+)*)/);
    const suffixMatch = originalText.match(/[^\d,\s]+/);
    
    if (!numberMatch) return; // Exit if no number found
    
    const target = parseInt(numberMatch[1].replace(/,/g, ''));
    const suffix = suffixMatch ? suffixMatch[0] : '';
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easeOutCubic);
        
        // Format number with commas if original had them
        let displayValue = current.toLocaleString();
        
        // Add suffix if it exists
        if (suffix) {
            displayValue += suffix;
        }
        
        element.textContent = displayValue;
        
        // Continue animation if not complete
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            // Ensure final value is exactly correct
            element.textContent = target.toLocaleString() + suffix;
        }
    }
    
    // Start the animation
    requestAnimationFrame(updateNumber);
}

// Add smooth scrolling for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Reset animations when scrolling back up (for demo purposes)
function resetAnimations() {
    document.querySelectorAll('.stat-number[data-animated]').forEach(stat => {
        stat.removeAttribute('data-animated');
    });
    
    document.querySelectorAll('.fade-element.visible').forEach(el => {
        el.classList.remove('visible');
    });
}

// Uncomment the line below if you want animations to reset when scrolling to top
// window.addEventListener('scroll', () => {
//     if (window.scrollY === 0) resetAnimations();
// });

// Initialize any visible elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if any elements are already visible
    document.querySelectorAll('.fade-element').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
            
            const statNumbers = el.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.hasAttribute('data-animated')) {
                    stat.setAttribute('data-animated', 'true');
                    animateNumber(stat);
                }
            });
        }
    });
});