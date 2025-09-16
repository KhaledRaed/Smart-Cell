document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.previousElementSibling;
                const isExpanded = content.style.maxHeight && content.style.maxHeight !== '200px';

                if (!isExpanded) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    button.textContent = button.textContent.includes("OHS") ? "Show Less ↑" : "Show Less ↑";
                    content.closest('.policy-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    content.style.maxHeight = "200px";
                    button.textContent = button.textContent.includes("OHS") ? "Explore Full Policy ↓" : "Discover More Details ↓";
                }
            });
        });