// Policy read more functionality
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.previousElementSibling;
                const isExpanded = content.style.maxHeight && content.style.maxHeight !== '200px';

                if (!isExpanded) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    button.textContent = "Show Less ↑";
                    content.closest('.policy-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    content.style.maxHeight = "200px";
                    button.textContent = button.textContent.includes("OHS") ? "Explore Full Policy ↓" : "Discover More Details ↓";
                }
            });
        });

        // Modal functionality
        function openModal(modalId, title, imageSrc) {
            const modal = document.getElementById(modalId);
            const modalImage = document.getElementById(modalId + '-image');
            const modalTitle = modal.querySelector('.modal-title');
            
            modalTitle.textContent = title;
            modalImage.src = imageSrc;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });