 class OrganizationChart {
                constructor() {
                    this.svg = document.getElementById("connectors");
                    this.orgChart = document.getElementById("orgChart");
                    this.nodePositions = new Map();
                    this.init();
                }
                init() {
                    this.setupEventListeners();
                    // Initial calculation after a short delay to ensure rendering
                    setTimeout(() => {
                        this.calculateNodePositions();
                        this.drawConnectors();
                    }, 100);
                }
                setupEventListeners() {
                    document.addEventListener("click", (e) => {
                        if (e.target.classList.contains("toggle")) {
                            e.preventDefault();
                            e.stopPropagation();
                            const node = e.target.closest(".node");
                            const nodeId = node.id;
                            const isExpanded = e.target.getAttribute('data-state') === 'expanded';
                            this.toggleBranch(nodeId, !isExpanded);
                            // Update toggle icon immediately
                            e.target.textContent = !isExpanded ? "▼" : "▶";
                            e.target.setAttribute('data-state', !isExpanded ? 'expanded' : 'collapsed');
                            // Redraw connectors after animation completes
                            setTimeout(() => {
                                this.calculateNodePositions();
                                this.drawConnectors();
                            }, 300);
                        }
                    });
                    // Recalculate on resize with debouncing
                    window.addEventListener("resize", this.debounce(() => {
                        this.calculateNodePositions();
                        this.drawConnectors();
                    }, 150));
                    // Handle orientation changes on mobile
                    window.addEventListener("orientationchange", () => {
                        setTimeout(() => {
                            this.calculateNodePositions();
                            this.drawConnectors();
                        }, 200);
                    });
                }
                calculateNodePositions() {
                    this.nodePositions.clear();
                    const orgChartRect = this.orgChart.getBoundingClientRect();
                    document.querySelectorAll('.node').forEach(node => {
                        if (this.isElementVisible(node)) {
                            const rect = node.getBoundingClientRect();
                            this.nodePositions.set(node.id, {
                                x: rect.left + rect.width / 2 - orgChartRect.left,
                                y: rect.top - orgChartRect.top,
                                bottomY: rect.bottom - orgChartRect.top,
                                width: rect.width,
                                height: rect.height,
                                element: node
                            });
                        }
                    });
                }
                drawConnectors() {
                    this.svg.innerHTML = "";
                    const orgChartRect = this.orgChart.getBoundingClientRect();
                    this.svg.setAttribute('width', orgChartRect.width);
                    this.svg.setAttribute('height', orgChartRect.height);
                    try {
                        // Connection from GM to Exec
                        if (this.isElementVisible(document.getElementById('gm')) &&
                            this.isElementVisible(document.getElementById('exec'))) {
                            this.drawDirectConnection('gm', 'exec');
                        }
                        // Connections from Exec to its direct children
                        const execChildrenIds = ['legal', 'finance', 'hr', 'qehs', 'pmo'];
                        const visibleExecChildren = execChildrenIds.filter(id => {
                            const element = document.getElementById(id);
                            return element && this.isElementVisible(element);
                        });
                        if (visibleExecChildren.length > 0 && this.isElementVisible(document.getElementById('exec'))) {
                            this.drawMultipleConnections('exec', visibleExecChildren);
                        }
                        // Connections from QEHS to its children (left side)
                        const qehsChildrenIds = ['quality', 'safety', 'inspector'];
                        const qehsGroup = document.querySelector('.children-group.qehs-side');
                        if (qehsGroup && this.isElementVisible(qehsGroup) && this.isElementVisible(document.getElementById('qehs'))) {
                            const visibleQehsChildren = qehsChildrenIds.filter(id => {
                                const element = document.getElementById(id);
                                return element && this.isElementVisible(element);
                            });
                            if (visibleQehsChildren.length > 0) {
                                this.drawVerticalConnections('qehs', visibleQehsChildren);
                            }
                        }
                        // Connections from PMO to its children (right side)
                        const pmoChildrenIds = ['proj', 'fleet', 'warehouse'];
                        const pmoGroup = document.querySelector('.children-group.pmo-side');
                        if (pmoGroup && this.isElementVisible(pmoGroup) && this.isElementVisible(document.getElementById('pmo'))) {
                            const visiblePmoChildren = pmoChildrenIds.filter(id => {
                                const element = document.getElementById(id);
                                return element && this.isElementVisible(element);
                            });
                            if (visiblePmoChildren.length > 0) {
                                this.drawVerticalConnections('pmo', visiblePmoChildren);
                            }
                        }
                    } catch (error) {
                        console.error("Error drawing connectors:", error);
                    }
                }
                drawDirectConnection(parentId, childId) {
                    if (!this.nodePositions.has(parentId) || !this.nodePositions.has(childId)) {
                        return;
                    }
                    const parentPos = this.nodePositions.get(parentId);
                    const childPos = this.nodePositions.get(childId);
                    this.drawLine(parentPos.x, parentPos.bottomY, childPos.x, childPos.y, 'connector connector-parent');
                }
                drawMultipleConnections(parentId, childIds) {
                    if (!this.nodePositions.has(parentId) || childIds.length === 0) return;
                    const parentPos = this.nodePositions.get(parentId);
                    const childrenPos = childIds.map(id => this.nodePositions.get(id)).filter(pos => pos);
                    if (childrenPos.length === 0) return;
                    const minChildY = Math.min(...childrenPos.map(pos => pos.y));
                    const horizontalY = parentPos.bottomY + (minChildY - parentPos.bottomY) / 2;
                    // Vertical line from parent
                    this.drawLine(parentPos.x, parentPos.bottomY, parentPos.x, horizontalY, this.getConnectorClass(parentId));
                    if (childrenPos.length > 1) {
                        const leftmostX = Math.min(...childrenPos.map(pos => pos.x));
                        const rightmostX = Math.max(...childrenPos.map(pos => pos.x));
                        // Horizontal line
                        this.drawLine(leftmostX, horizontalY, rightmostX, horizontalY, this.getConnectorClass(parentId));
                    }
                    // Vertical lines to each child
                    childrenPos.forEach((childPos) => {
                        this.drawLine(childPos.x, horizontalY, childPos.x, childPos.y, this.getConnectorClass(parentId));
                    });
                }
                // Special vertical connections for QEHS and PMO children
                drawVerticalConnections(parentId, childIds) {
                    if (!this.nodePositions.has(parentId) || childIds.length === 0) return;
                    const parentPos = this.nodePositions.get(parentId);
                    const childrenPos = childIds.map(id => this.nodePositions.get(id)).filter(pos => pos);
                    if (childrenPos.length === 0) return;
                    // For mobile: use horizontal layout when stacked vertically
                    const isMobile = window.innerWidth <= 1200;
                    if (isMobile) {
                        // Use the standard multiple connections for mobile
                        this.drawMultipleConnections(parentId, childIds);
                        return;
                    }
                    // Desktop: draw direct lines to each child for vertical layout
                    const minChildY = Math.min(...childrenPos.map(pos => pos.y));
                    const horizontalY = parentPos.bottomY + (minChildY - parentPos.bottomY) / 2;
                    // Vertical line from parent down
                    this.drawLine(parentPos.x, parentPos.bottomY, parentPos.x, horizontalY, this.getConnectorClass(parentId));
                    // For each child, draw a path from the horizontal line
                    childrenPos.forEach((childPos) => {
                        // Horizontal line to child's x position
                        this.drawLine(parentPos.x, horizontalY, childPos.x, horizontalY, this.getConnectorClass(parentId));
                        // Vertical line down to child
                        this.drawLine(childPos.x, horizontalY, childPos.x, childPos.y, this.getConnectorClass(parentId));
                    });
                }
                getConnectorClass(parentId) {
                    if (parentId === 'qehs') {
                        return 'connector connector-qehs';
                    } else if (parentId === 'pmo') {
                        return 'connector connector-pmo';
                    } else {
                        return 'connector';
                    }
                }
                drawLine(x1, y1, x2, y2, className) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", Math.round(x1));
                    line.setAttribute("y1", Math.round(y1));
                    line.setAttribute("x2", Math.round(x2));
                    line.setAttribute("y2", Math.round(y2));
                    line.setAttribute("class", className);
                    this.svg.appendChild(line);
                }
                toggleBranch(nodeId, expand) {
                    if (!expand) {
                        this.closeAllChildren(nodeId);
                        return;
                    }
                    // Show direct child levels for this node
                    const levels = document.querySelectorAll(`.level[data-parent="${nodeId}"]`);
                    levels.forEach(level => {
                        level.style.display = 'flex';
                    });
                    // Handle children grids for 'qehs' and 'pmo'
                    if (nodeId === 'qehs') {
                        const childrenContainer = document.getElementById('children-container');
                        const qehsGroup = document.querySelector('.children-group.qehs-side');
                        if (childrenContainer && qehsGroup) {
                            childrenContainer.style.display = 'flex';
                            qehsGroup.style.display = 'flex';
                        }
                    } else if (nodeId === 'pmo') {
                        const childrenContainer = document.getElementById('children-container');
                        const pmoGroup = document.querySelector('.children-group.pmo-side');
                        if (childrenContainer && pmoGroup) {
                            childrenContainer.style.display = 'flex';
                            pmoGroup.style.display = 'flex';
                        }
                    }
                }
                closeAllChildren(nodeId) {
                    // Close direct child levels
                    const childLevels = document.querySelectorAll(`.level[data-parent="${nodeId}"]`);
                    childLevels.forEach(level => {
                        // Recursively close children of children
                        const childrenNodes = level.querySelectorAll('.node');
                        childrenNodes.forEach(childNode => {
                            const toggle = childNode.querySelector('.toggle');
                            if (toggle && toggle.getAttribute('data-state') === 'expanded') {
                                this.closeAllChildren(childNode.id);
                                toggle.textContent = "▶";
                                toggle.setAttribute('data-state', 'collapsed');
                            }
                        });
                        level.style.display = 'none';
                    });
                    // Handle QEHS children - hide only QEHS side
                    if (nodeId === 'qehs') {
                        const qehsGroup = document.querySelector('.children-group.qehs-side');
                        if (qehsGroup) {
                            qehsGroup.style.display = 'none';
                        }
                        // Check if PMO is also collapsed
                        const pmoGroup = document.querySelector('.children-group.pmo-side');
                        const pmoToggle = document.querySelector('#pmo .toggle');
                        const isPmoExpanded = pmoToggle && pmoToggle.getAttribute('data-state') === 'expanded';
                        const isPmoVisible = pmoGroup && getComputedStyle(pmoGroup).display !== 'none';
                        if (!isPmoExpanded || !isPmoVisible) {
                            const childrenContainer = document.getElementById('children-container');
                            if (childrenContainer) {
                                childrenContainer.style.display = 'none';
                            }
                        }
                    }
                    // Handle PMO children - hide only PMO side
                    if (nodeId === 'pmo') {
                        const pmoGroup = document.querySelector('.children-group.pmo-side');
                        if (pmoGroup) {
                            pmoGroup.style.display = 'none';
                        }
                        // Check if QEHS is also collapsed
                        const qehsGroup = document.querySelector('.children-group.qehs-side');
                        const qehsToggle = document.querySelector('#qehs .toggle');
                        const isQehsExpanded = qehsToggle && qehsToggle.getAttribute('data-state') === 'expanded';
                        const isQehsVisible = qehsGroup && getComputedStyle(qehsGroup).display !== 'none';
                        if (!isQehsExpanded || !isQehsVisible) {
                            const childrenContainer = document.getElementById('children-container');
                            if (childrenContainer) {
                                childrenContainer.style.display = 'none';
                            }
                        }
                    }
                    // Handle exec - hide entire children container
                    if (nodeId === 'exec') {
                        const childrenContainer = document.getElementById('children-container');
                        if (childrenContainer) {
                            childrenContainer.style.display = 'none';
                        }
                        const qehsGroup = document.querySelector('.children-group.qehs-side');
                        const pmoGroup = document.querySelector('.children-group.pmo-side');
                        if (qehsGroup) qehsGroup.style.display = 'none';
                        if (pmoGroup) pmoGroup.style.display = 'none';
                    }
                }
                isElementVisible(element) {
                    if (!element) return false;
                    const style = getComputedStyle(element);
                    const rect = element.getBoundingClientRect();
                    return style.display !== 'none' &&
                        style.visibility !== 'hidden' &&
                        style.opacity !== '0' &&
                        rect.width > 0 &&
                        rect.height > 0;
                }
                debounce(func, wait) {
                    let timeout;
                    return function executedFunction(...args) {
                        const later = () => {
                            clearTimeout(timeout);
                            func(...args);
                        };
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                    };
                }
            }
            document.addEventListener('DOMContentLoaded', function () {
                new OrganizationChart();
            });