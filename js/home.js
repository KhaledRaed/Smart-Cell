// Create animated network background
        function createNetworkBackground() {
            const networkContainer = document.getElementById('networkBackground');
            const nodes = [];
            const connections = [];
            const particles = [];
            
            // Create network nodes
            for (let i = 0; i < 15; i++) {
                const node = document.createElement('div');
                node.className = 'homeSec-network-node';
                node.style.left = Math.random() * 100 + '%';
                node.style.top = Math.random() * 100 + '%';
                node.style.animationDelay = Math.random() * 3 + 's';
                networkContainer.appendChild(node);
                nodes.push({
                    element: node,
                    x: parseFloat(node.style.left),
                    y: parseFloat(node.style.top)
                });
            }
            
            // Create connections between nearby nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - nodes[i].x;
                    const dy = nodes[j].y - nodes[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 40) { // Connect nearby nodes
                        const connection = document.createElement('div');
                        connection.className = 'homeSec-connection';
                        
                        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                        const length = distance * (window.innerWidth / 100); // Convert % to px
                        
                        connection.style.left = nodes[i].x + '%';
                        connection.style.top = nodes[i].y + '%';
                        connection.style.width = length + 'px';
                        connection.style.transform = `rotate(${angle}deg)`;
                        connection.style.animationDelay = Math.random() * 4 + 's';
                        
                        networkContainer.appendChild(connection);
                        connections.push(connection);
                    }
                }
            }
            
            // Create floating particles
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'homeSec-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                networkContainer.appendChild(particle);
                particles.push(particle);
            }
            
            // Animate particles movement
            setInterval(() => {
                particles.forEach(particle => {
                    const currentLeft = parseFloat(particle.style.left);
                    const currentTop = parseFloat(particle.style.top);
                    
                    const newLeft = currentLeft + (Math.random() - 0.5) * 2;
                    const newTop = currentTop + (Math.random() - 0.5) * 2;
                    
                    particle.style.left = Math.max(0, Math.min(100, newLeft)) + '%';
                    particle.style.top = Math.max(0, Math.min(100, newTop)) + '%';
                });
            }, 3000);
        }
        
        // Initialize network background when page loads
        document.addEventListener('DOMContentLoaded', createNetworkBackground);
        
        // Recreate network on window resize
        window.addEventListener('resize', () => {
            const networkContainer = document.getElementById('networkBackground');
            networkContainer.innerHTML = '';
            setTimeout(createNetworkBackground, 100);
        });