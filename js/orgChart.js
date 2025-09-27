document.addEventListener('DOMContentLoaded', function(){
    const section = document.querySelector('#orgchart');
    if (!section) {
        console.error("Section not found");
        return;
    }

    // First hide all cards
    let cards = section.querySelectorAll('.org-card');
    cards.forEach(card => {
        card.classList.add('org-card-hidden');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section is visible');
                let cards = section.querySelectorAll('.org-card');
                // Add staggered animation
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.remove('org-card-hidden');
                    }, index * 100); // 100ms delay between each card
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    });

    observer.observe(section);
});
// class OrganizationChart {
//             constructor() {
//                 this.svg = document.getElementById("connectors");
//                 this.orgChart = document.getElementById("orgChart");
//                 this.nodePositions = new Map();
//                 this.init();
//             }
//             init() {
//                 this.setupEventListeners();
//                 // Initial calculation after a short delay to ensure rendering
//                 setTimeout(() => {
//                     this.calculateNodePositions();
//                     this.drawConnectors();
//                 }, 100);
//             }
//             setupEventListeners() {
//                 document.addEventListener("click", (e) => {
//                     if (e.target.classList.contains("toggle")) {
//                         e.preventDefault();
//                         e.stopPropagation();
//                         const node = e.target.closest(".node");
//                         const nodeId = node.id;
//                         const isExpanded = e.target.getAttribute('data-state') === 'expanded';
                        
//                         // Handle mutually exclusive behavior for QEHS and PMO
//                         if (nodeId === 'qehs' || nodeId === 'pmo') {
//                             if (!isExpanded) { // If we're about to expand
//                                 const otherNodeId = nodeId === 'qehs' ? 'pmo' : 'qehs';
//                                 const otherToggle = document.querySelector(`#${otherNodeId} .toggle`);
//                                 if (otherToggle && otherToggle.getAttribute('data-state') === 'expanded') {
//                                     // Close the other branch
//                                     this.closeBranch(otherNodeId);
//                                 }
//                             }
//                         }
                        
//                         this.toggleBranch(nodeId, !isExpanded);
//                         // Update toggle icon immediately
//                         e.target.textContent = !isExpanded ? "▼" : "▶";
//                         e.target.setAttribute('data-state', !isExpanded ? 'expanded' : 'collapsed');
//                         // Update children container visibility if closing exec, qehs, or pmo
//                         if (nodeId === 'exec' || nodeId === 'qehs' || nodeId === 'pmo') {
//                             this.updateChildrenContainerVisibility();
//                         }
//                         // Redraw connectors after animation completes
//                         setTimeout(() => {
//                             this.calculateNodePositions();
//                             this.drawConnectors();
//                         }, 300);
//                     } else if (e.target.closest(".node") && e.target.closest(".node").querySelector(".toggle")) {
//                         // Click on node with toggle - expand/collapse
//                         const node = e.target.closest(".node");
//                         const toggle = node.querySelector(".toggle");
//                         const nodeId = node.id;
//                         const isExpanded = toggle.getAttribute('data-state') === 'expanded';
                        
//                         // Handle mutually exclusive behavior for QEHS and PMO
//                         if (nodeId === 'qehs' || nodeId === 'pmo') {
//                             if (!isExpanded) { // If we're about to expand
//                                 const otherNodeId = nodeId === 'qehs' ? 'pmo' : 'qehs';
//                                 const otherToggle = document.querySelector(`#${otherNodeId} .toggle`);
//                                 if (otherToggle && otherToggle.getAttribute('data-state') === 'expanded') {
//                                     // Close the other branch
//                                     this.closeBranch(otherNodeId);
//                                 }
//                             }
//                         }

//                         this.toggleBranch(nodeId, !isExpanded);
//                         // Update toggle icon immediately
//                         toggle.textContent = !isExpanded ? "▼" : "▶";
//                         toggle.setAttribute('data-state', !isExpanded ? 'expanded' : 'collapsed');
//                         // Update children container visibility if closing exec, qehs, or pmo
//                         if (nodeId === 'exec' || nodeId === 'qehs' || nodeId === 'pmo') {
//                             this.updateChildrenContainerVisibility();
//                         }
//                         // Redraw connectors after animation completes
//                         setTimeout(() => {
//                             this.calculateNodePositions();
//                             this.drawConnectors();
//                         }, 300);
//                     }
//                 });
//                 // Recalculate on resize with debouncing
//                 window.addEventListener("resize", this.debounce(() => {
//                     this.calculateNodePositions();
//                     this.drawConnectors();
//                 }, 150));
//                 // Handle orientation changes on mobile
//                 window.addEventListener("orientationchange", () => {
//                     setTimeout(() => {
//                         this.calculateNodePositions();
//                         this.drawConnectors();
//                     }, 200);
//                 });
//             }
//             calculateNodePositions() {
//                 this.nodePositions.clear();
//                 const orgChartRect = this.orgChart.getBoundingClientRect();
//                 document.querySelectorAll('.node').forEach(node => {
//                     if (this.isElementVisible(node)) {
//                         const rect = node.getBoundingClientRect();
//                         this.nodePositions.set(node.id, {
//                             x: rect.left + rect.width / 2 - orgChartRect.left,
//                             y: rect.top - orgChartRect.top,
//                             bottomY: rect.bottom - orgChartRect.top,
//                             width: rect.width,
//                             height: rect.height,
//                             element: node
//                         });
//                     }
//                 });
//             }
//             drawConnectors() {
//                 this.svg.innerHTML = "";
//                 const orgChartRect = this.orgChart.getBoundingClientRect();
//                 this.svg.setAttribute('width', orgChartRect.width);
//                 this.svg.setAttribute('height', orgChartRect.height);

//                 try {
//                     // Connection from GM to Exec
//                     if (this.isElementVisible(document.getElementById('gm')) &&
//                         this.isElementVisible(document.getElementById('exec'))) {
//                         this.drawDirectConnection('gm', 'exec');
//                     }

//                     // Connections from Exec to its direct children
//                     const execChildrenIds = ['legal', 'finance', 'hr', 'qehs', 'pmo'];
//                     const visibleExecChildren = execChildrenIds.filter(id => {
//                         const element = document.getElementById(id);
//                         return element && this.isElementVisible(element);
//                     });
//                     if (visibleExecChildren.length > 0 && this.isElementVisible(document.getElementById('exec'))) {
//                         this.drawMultipleConnections('exec', visibleExecChildren);
//                     }

//                     // Note: Removed connectors for QEHS and PMO children as requested
//                 } catch (error) {
//                     console.error("Error drawing connectors:", error);
//                 }
//             }
//             drawDirectConnection(parentId, childId) {
//                 if (!this.nodePositions.has(parentId) || !this.nodePositions.has(childId)) {
//                     return;
//                 }
//                 const parentPos = this.nodePositions.get(parentId);
//                 const childPos = this.nodePositions.get(childId);
//                 this.drawLine(parentPos.x, parentPos.bottomY, childPos.x, childPos.y, 'connector connector-parent');
//             }
//             drawMultipleConnections(parentId, childIds) {
//                 if (!this.nodePositions.has(parentId) || childIds.length === 0) return;
//                 const parentPos = this.nodePositions.get(parentId);
//                 const childrenPos = childIds.map(id => this.nodePositions.get(id)).filter(pos => pos);
//                 if (childrenPos.length === 0) return;
//                 const minChildY = Math.min(...childrenPos.map(pos => pos.y));
//                 const horizontalY = parentPos.bottomY + (minChildY - parentPos.bottomY) / 2;
//                 // Vertical line from parent
//                 this.drawLine(parentPos.x, parentPos.bottomY, parentPos.x, horizontalY, this.getConnectorClass(parentId));
//                 if (childrenPos.length > 1) {
//                     const leftmostX = Math.min(...childrenPos.map(pos => pos.x));
//                     const rightmostX = Math.max(...childrenPos.map(pos => pos.x));
//                     // Horizontal line
//                     this.drawLine(leftmostX, horizontalY, rightmostX, horizontalY, this.getConnectorClass(parentId));
//                 }
//                 // Vertical lines to each child
//                 childrenPos.forEach((childPos) => {
//                     this.drawLine(childPos.x, horizontalY, childPos.x, childPos.y, this.getConnectorClass(parentId));
//                 });
//             }
//             getConnectorClass(parentId) {
//                 if (parentId === 'qehs') {
//                     return 'connector connector-qehs';
//                 } else if (parentId === 'pmo') {
//                     return 'connector connector-pmo';
//                 } else {
//                     return 'connector';
//                 }
//             }
//             drawLine(x1, y1, x2, y2, className) {
//                 const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//                 line.setAttribute("x1", Math.round(x1));
//                 line.setAttribute("y1", Math.round(y1));
//                 line.setAttribute("x2", Math.round(x2));
//                 line.setAttribute("y2", Math.round(y2));
//                 line.setAttribute("class", className);
//                 this.svg.appendChild(line);
//             }
//             toggleBranch(nodeId, expand) {
//                 if (!expand) {
//                     this.closeAllChildren(nodeId);
//                     this.updateChildrenContainerVisibility();
//                     return;
//                 }

//                 // Show direct child levels for this node
//                 const levels = document.querySelectorAll(`.level[data-parent="${nodeId}"]`);
//                 levels.forEach(level => {
//                     level.style.display = 'flex';
//                 });

//                 // Handle children grids for 'qehs' and 'pmo'
//                 if (nodeId === 'qehs' || nodeId === 'pmo') {
//                     const childrenContainer = document.getElementById('children-container');
//                     const targetGroup = document.querySelector(`.children-group.${nodeId === 'qehs' ? 'qehs' : 'pmo'}-side`);
                    
//                     if (childrenContainer && targetGroup) {
//                         childrenContainer.style.display = 'flex';
//                         targetGroup.style.display = 'flex';
//                     }
//                 }
//             }
//             closeBranch(nodeId) {
//                 // Close a specific branch and update its toggle
//                 this.closeAllChildren(nodeId);
//                 const toggle = document.querySelector(`#${nodeId} .toggle`);
//                 if (toggle) {
//                     toggle.textContent = "▶";
//                     toggle.setAttribute('data-state', 'collapsed');
//                 }
//                 // Update container visibility if this is qehs or pmo
//                 if (nodeId === 'qehs' || nodeId === 'pmo') {
//                     this.updateChildrenContainerVisibility();
//                 }
//             }
//             updateChildrenContainerVisibility() {
//                 const qehsToggle = document.querySelector('#qehs .toggle');
//                 const pmoToggle = document.querySelector('#pmo .toggle');
//                 const childrenContainer = document.getElementById('children-container');
                
//                 if (!childrenContainer) return;
                
//                 const isQehsExpanded = qehsToggle && qehsToggle.getAttribute('data-state') === 'expanded';
//                 const isPmoExpanded = pmoToggle && pmoToggle.getAttribute('data-state') === 'expanded';
                
//                 // Show the container if at least one of them is expanded
//                 if (isQehsExpanded || isPmoExpanded) {
//                     childrenContainer.style.display = 'flex';
//                 } else {
//                     childrenContainer.style.display = 'none';
//                 }
//             }
//             closeAllChildren(nodeId) {
//                 // Close direct child levels
//                 const childLevels = document.querySelectorAll(`.level[data-parent="${nodeId}"]`);
//                 childLevels.forEach(level => {
//                     // Recursively close children of children
//                     const childrenNodes = level.querySelectorAll('.node');
//                     childrenNodes.forEach(childNode => {
//                         const toggle = childNode.querySelector('.toggle');
//                         if (toggle && toggle.getAttribute('data-state') === 'expanded') {
//                             this.closeAllChildren(childNode.id);
//                             toggle.textContent = "▶";
//                             toggle.setAttribute('data-state', 'collapsed');
//                         }
//                     });
//                     level.style.display = 'none';
//                 });

//                 // Handle QEHS and PMO children
//                 if (nodeId === 'qehs' || nodeId === 'pmo') {
//                     const targetGroup = document.querySelector(`.children-group.${nodeId === 'qehs' ? 'qehs' : 'pmo'}-side`);
                    
//                     if (targetGroup) {
//                         targetGroup.style.display = 'none';
//                     }
//                 }

//                 // Handle exec - hide entire children container and reset toggles
//                 if (nodeId === 'exec') {
//                     const childrenContainer = document.getElementById('children-container');
//                     const qehsGroup = document.querySelector('.children-group.qehs-side');
//                     const pmoGroup = document.querySelector('.children-group.pmo-side');
//                     const qehsToggle = document.querySelector('#qehs .toggle');
//                     const pmoToggle = document.querySelector('#pmo .toggle');

//                     if (childrenContainer) childrenContainer.style.display = 'none';
//                     if (qehsGroup) qehsGroup.style.display = 'none';
//                     if (pmoGroup) pmoGroup.style.display = 'none';
                    
//                     // Collapse QEHS and PMO branches
//                     if (qehsToggle) {
//                         qehsToggle.textContent = "▶";
//                         qehsToggle.setAttribute('data-state', 'collapsed');
//                     }
//                     if (pmoToggle) {
//                         pmoToggle.textContent = "▶";
//                         pmoToggle.setAttribute('data-state', 'collapsed');
//                     }
//                 }
//             }
//             isElementVisible(element) {
//                 if (!element) return false;
//                 const style = getComputedStyle(element);
//                 const rect = element.getBoundingClientRect();
//                 return style.display !== 'none' &&
//                     style.visibility !== 'hidden' &&
//                     style.opacity !== '0' &&
//                     rect.width > 0 &&
//                     rect.height > 0;
//             }
//             debounce(func, wait) {
//                 let timeout;
//                 return function executedFunction(...args) {
//                     const later = () => {
//                         clearTimeout(timeout);
//                         func(...args);
//                     };
//                     clearTimeout(timeout);
//                     timeout = setTimeout(later, wait);
//                 };
//             }
//         }
//         document.addEventListener('DOMContentLoaded', function () {
//             new OrganizationChart();
//         });