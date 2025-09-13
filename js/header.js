// Header functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        const closeSidebar = document.querySelector('.close-sidebar');

        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });

        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });

        // Sidebar dropdown functionality
        const sidebarToggles = document.querySelectorAll('.sidebar-toggle');
        
        sidebarToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                
                const dropdownId = toggle.getAttribute('data-dropdown');
                const dropdown = document.getElementById(dropdownId);
                const icon = toggle.querySelector('.sidebar-dropdown-icon');
                
                // Close all other dropdowns
                sidebarToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherDropdownId = otherToggle.getAttribute('data-dropdown');
                        const otherDropdown = document.getElementById(otherDropdownId);
                        const otherIcon = otherToggle.querySelector('.sidebar-dropdown-icon');
                        
                        otherDropdown.classList.remove('active');
                        otherIcon.classList.remove('rotated');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
                icon.classList.toggle('rotated');
            });
        });

        // Close sidebar on dropdown item click
        const sidebarDropdownItems = document.querySelectorAll('.sidebar-dropdown-item');
        sidebarDropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebar.classList.remove('active');
                // Reset all dropdowns
                document.querySelectorAll('.sidebar-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                document.querySelectorAll('.sidebar-dropdown-icon').forEach(icon => {
                    icon.classList.remove('rotated');
                });
            });
        });