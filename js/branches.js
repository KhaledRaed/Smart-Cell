 let currentBranch = null;

        function toggleBranch(branch) {
            if (currentBranch && currentBranch !== branch) {
                closeBranch();
            }

            const branchElement = document.getElementById(`branch-${branch}`);
            const cardElement = document.querySelector(`[onclick="toggleBranch('${branch}')"]`);
            
            if (currentBranch === branch) {
                closeBranch();
            } else {
                currentBranch = branch;
                document.querySelectorAll('.branch-card').forEach(card => {
                    card.classList.remove('active');
                });
                cardElement.classList.add('active');
                setTimeout(() => {
                    branchElement.classList.add('active');
                    branchElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        }

        function closeBranch() {
            if (currentBranch) {
                const branchElement = document.getElementById(`branch-${currentBranch}`);
                branchElement.classList.remove('active');
                document.querySelectorAll('.branch-card').forEach(card => {
                    card.classList.remove('active');
                });
                currentBranch = null;
            }
        }

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.branch-card') && 
                !event.target.closest('.branch-details') &&
                currentBranch) {
                closeBranch();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && currentBranch) {
                closeBranch();
            }
        });

        // Add smooth animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.branch-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });