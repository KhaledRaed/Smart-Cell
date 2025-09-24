// Project data
const projectsData = {
    2010: {
        summary: "Site cleaning and Wi-Max upgrade for Umniah.",
        projects: [
            {
                title: "Umniah",
                description: "Site Cleaning<br>Wi-Max Upgrade",
                tech: ["Umniah", "Wi-Max"]
            }
        ]
    },
    2011: {
        summary: "MDS and 3G installation for Umniah.",
        projects: [
            {
                title: "Umniah",
                description: "MDS<br>3G Installation",
                tech: ["Umniah", "MDS", "3G"]
            }
        ]
    },
    2012: {
        summary: "MOS, 3G installation and manpower outsourcing for Umniah.",
        projects: [
            {
                title: "Umniah",
                description: "MOS<br>3G Installation<br>Manpower Outsourcing",
                tech: ["Umniah", "MOS", "3G", "Outsourcing"]
            }
        ]
    },
    2013: {
        summary: "MW installation, 3G installation, micro cell project, and outsourcing for Umniah and ZTE.",
        projects: [
            {
                title: "Umniah",
                description: "MOS<br>MW Installation<br>3G Installation<br>Micro Cell Project EP<br>Manpower Outsourcing",
                tech: ["Umniah", "MOS", "MW", "3G", "Micro Cell", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "3G Installation",
                tech: ["ZTE", "3G"]
            }
        ]
    },
    2014: {
        summary: "MW SWAP, MDS, Power Swap, 3G installation, and outsourcing for Umniah and ZTE.",
        projects: [
            {
                title: "Umniah",
                description: "MW SWAP<br>MDS<br>Power Swap<br>3G Installation<br>Manpower Outsourcing",
                tech: ["Umniah", "MW SWAP", "MDS", "Power Swap", "3G", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "3G Installation<br>Manpower Outsourcing",
                tech: ["ZTE", "3G", "Outsourcing"]
            }
        ]
    },
    2015: {
        summary: "Manpower outsourcing, MDS, preventive maintenance, 3G installation, and swap projects for Umniah, ZTE, and Huawei.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>MDS<br>Preventive Maintenance<br>3G Installation",
                tech: ["Umniah", "MDS", "3G", "Maintenance", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "3G Installation<br>Manpower Outsourcing",
                tech: ["ZTE", "3G", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Umniah Ph1 Orange Jordan Swap Project",
                tech: ["Huawei", "Umniah", "Orange", "Swap"]
            }
        ]
    },
    2016: {
        summary: "Manpower outsourcing, MDS, site relocation, Orange expansion, and Umniah Ph12 for Umniah, ZTE, and Huawei.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>MDS<br>Site Relocation MOE",
                tech: ["Umniah", "MDS", "Site Relocation", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "Manpower Outsourcing",
                tech: ["ZTE", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Umniah Ph12<br>Orange Expansion Project",
                tech: ["Huawei", "Umniah", "Orange"]
            }
        ]
    },
    2017: {
        summary: "Manpower outsourcing, MDS, site relocation, Orange expansion, Zain TDD/MW, and IP core network for Umniah, ZTE, Huawei.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>MDS<br>Site Relocation MOE",
                tech: ["Umniah", "MDS", "Site Relocation", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "Manpower Outsourcing",
                tech: ["ZTE", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Umniah Ph13<br>Orange Expansion Project",
                tech: ["Huawei", "Umniah", "Orange"]
            },
            {
                title: "Zain",
                description: "Zain TDD/MW<br>IP Core Network",
                tech: ["Zain", "TDD/MW", "IP Core"]
            }
        ]
    },
    2018: {
        summary: "Manpower outsourcing, MDS, site relocation, MW & WI installation, Orange expansion, Zain TDD/MW, IP core, FTTH HC for Umniah, ZTE, Huawei, Nokia.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>MDS<br>Site Relocation MOE Power Swap<br>MW & WI Installation",
                tech: ["Umniah", "MDS", "Site Relocation", "MW", "WI", "Outsourcing"]
            },
            {
                title: "ZTE",
                description: "Manpower Outsourcing",
                tech: ["ZTE", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Umniah Ph13<br>Orange Expansion Project",
                tech: ["Huawei", "Umniah", "Orange"]
            },
            {
                title: "Zain",
                description: "Zain TDD/MW<br>IP Core Network",
                tech: ["Zain", "TDD/MW", "IP Core"]
            },
            {
                title: "Nokia",
                description: "FTTH HC",
                tech: ["Nokia", "FTTH"]
            }
        ]
    },
    2019: {
        summary: "Manpower outsourcing, site relocation, MW & WI installation, Orange expansion, FTTH HC, smart AC meter, LTT WiMAX, and Algeria expansion for Umniah, Huawei, Nokia, Orange.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>Telecom, IT Developers<br>Site Relocation<br>Power Consumption Audit<br>Power Swap<br>MW & WI Installation",
                tech: ["Umniah", "Telecom", "IT", "Power", "MW", "WI", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Umniah core IP Orange Expansion Project<br>3D Survey, MW m WL Zain AAU Replacement, MW, IP RAN, MDU IP Core Network",
                tech: ["Huawei", "Umniah", "Orange", "Zain", "IP Core"]
            },
            {
                title: "Nokia",
                description: "FTTH HC SAEI Umniah MW Survey and Installation<br>Site Construction",
                tech: ["Nokia", "FTTH", "MW", "Site Construction"]
            },
            {
                title: "Orange",
                description: "Smart AC Meter<br>LTT WiMAX<br>(Huawei & ZTE) Libya<br>Site Construction Huawei & ZTE Algeria 3G, 2G Expansion Project",
                tech: ["Orange", "Smart Meter", "WiMAX", "Libya", "Algeria", "Huawei", "ZTE"]
            }
        ]
    },
    2020: {
        summary: "MW link installation, split sector, Orange network 2.6, relocation, DWDM, OLT SK, 9K, data center, Zain Sudan site repair for SEIA, Huawei, Umniah.",
        projects: [
            {
                title: "SEIA",
                description: "Project MW Link Installation",
                tech: ["SEIA", "MW Link"]
            },
            {
                title: "Huawei",
                description: "Split Sector and Orange Network 2.6",
                tech: ["Huawei", "Orange", "Network 2.6"]
            },
            {
                title: "Umniah",
                description: "Relocation Site Project",
                tech: ["Umniah", "Relocation"]
            },
            {
                title: "Core Network",
                description: "DWDM, OLT SK Installation, 9K",
                tech: ["DWDM", "OLT SK", "9K"]
            },
            {
                title: "Data Center",
                description: "Power System Installation<br>Zain (Sudan) Site Repair",
                tech: ["Data Center", "Power", "Zain", "Sudan"]
            }
        ]
    },
    2021: {
        summary: "Manpower outsourcing, wireless & MW installation, solar system, core network, site audit, civil work, tower installation, fiber optics for Umniah, Huawei, TASC Tower.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing & Wireless and MW Installation",
                tech: ["Umniah", "Wireless", "MW", "Outsourcing"]
            },
            {
                title: "Huawei",
                description: "Solar System Installation & Core Network Installation",
                tech: ["Huawei", "Solar", "Core Network"]
            },
            {
                title: "TASC Tower",
                description: "2800 Site Audit, Civil Work, Tower Installation & Power Installation",
                tech: ["TASC Tower", "Site Audit", "Civil Work", "Tower", "Power"]
            },
            {
                title: "Huawei",
                description: "MW & Wireless Installation, Data Center and Core Network Installation with Fiber Optics",
                tech: ["Huawei", "MW", "Wireless", "Data Center", "Core Network", "Fiber Optics"]
            }
        ]
    },
    2022: {
        summary: "Manpower outsourcing, power system installation, swap, telecom site, mast & tower, MW & wireless, fiber optics, swap & 5G for Umniah, Orange, TASC Tower, Huawei, Ericsson, Nokia, Fiber-tech.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing & Power System Installation & Swap Telecom Site",
                tech: ["Umniah", "Power", "Outsourcing", "Swap", "Telecom"]
            },
            {
                title: "Orange",
                description: "Civil Work, Mast and Tower Installation & MW & Wireless Installation",
                tech: ["Orange", "Civil Work", "Tower", "MW", "Wireless"]
            },
            {
                title: "TASC Tower",
                description: "Civil Work Tower Installation & Power Installation",
                tech: ["TASC Tower", "Civil Work", "Tower", "Power"]
            },
            {
                title: "Huawei",
                description: "1100 Sites Wireless Installation, Data Center and Core Network Installation with Fiber Optics",
                tech: ["Huawei", "Wireless", "Data Center", "Core Network", "Fiber Optics"]
            },
            {
                title: "Ericsson",
                description: "Swap and 5G Installation for Umniah Network",
                tech: ["Ericsson", "Swap", "5G", "Umniah"]
            },
            {
                title: "Nokia",
                description: "Swap and 5G Installation for Zain and Orange Network",
                tech: ["Nokia", "Swap", "5G", "Zain", "Orange"]
            },
            {
                title: "Fiber-tech",
                description: "Manpower Outsourcing",
                tech: ["Fiber-tech", "Outsourcing"]
            }
        ]
    },
    2023: {
        summary: "Manpower outsourcing, new site installation, MW links, swap, civil work, mast & concrete base, Orange expansion, ZAIN, Huawei, Fiber-tech, TASC.",
        projects: [
            {
                title: "Umniah",
                description: "Manpower Outsourcing<br>New Site Installation Telecom & Power<br>MW Links Swap and Installation<br>Swap Power System<br>Civil Work Installation Mast & Concrete Base",
                tech: ["Umniah", "Telecom", "Power", "MW", "Swap", "Civil Work"]
            },
            {
                title: "Nokia",
                description: "Swap Power, Telecom & Add 5G for ZAIN Network<br>Swap Telecom & Add 5G for ZAIN Network",
                tech: ["Nokia", "Swap", "Telecom", "5G", "ZAIN"]
            },
            {
                title: "Ericsson",
                description: "Swap Telecom & Add 5G for Umniah Network<br>MW Link Installation & Swap for Orange Network",
                tech: ["Ericsson", "Swap", "Telecom", "5G", "Umniah", "Orange"]
            },
            {
                title: "ZAIN",
                description: "IBS Site Installation<br>Race Way Installation in Data Center",
                tech: ["ZAIN", "IBS", "Data Center"]
            },
            {
                title: "Orange",
                description: "Full Civil Work Installation, Tower, Mast and Concrete Base<br>Power System Installation<br>Telecom Expansion Installation<br>MW Link Installation<br>IBS Site Installation",
                tech: ["Orange", "Civil Work", "Tower", "Mast", "Concrete", "Power", "Telecom", "MW", "IBS"]
            },
            {
                title: "Huawei",
                description: "Telecom Site Installation Orange Network<br>Core Network Installation for Umniah & ZAIN & Orange<br>Solar System Installation<br>MW Link Installation for Umniah & ZAIN",
                tech: ["Huawei", "Telecom", "Core Network", "Solar", "MW", "Umniah", "ZAIN", "Orange"]
            },
            {
                title: "Fiber-tech",
                description: "OLT Installation<br>Manpower Outsourcing",
                tech: ["Fiber-tech", "OLT", "Outsourcing"]
            },
            {
                title: "TASC",
                description: "Full Civil Work Installation, Tower, Base and Cable Tray",
                tech: ["TASC", "Civil Work", "Tower", "Base", "Cable Tray"]
            }
        ]
    },
    2024: {
        summary: "Major telecom upgrades, 5G expansion, FTTH deployment, and core network installations.",
        projects: [
            {
                title: "Nokia",
                description: "SWAP & 5G Add-On – Zain Network",
                tech: ["Nokia", "5G", "SWAP", "Zain"]
            },
            {
                title: "Nokia",
                description: "SWAP & 5G Add-On – Orange Network",
                tech: ["Nokia", "5G", "SWAP", "Orange"]
            },
            {
                title: "Fiber-tech",
                description: "FTTH Deployment – Naitel",
                tech: ["Fiber", "FTTH", "Naitel"]
            },
            {
                title: "Umniah",
                description: "Telecom, Power, and Civil Works",
                tech: ["Umniah", "Telecom", "Power", "Civil Works"]
            },
            {
                title: "Orange",
                description: "Telecom, Power, and Civil Works",
                tech: ["Orange", "Telecom", "Power", "Civil Works"]
            },
            {
                title: "Ericsson",
                description: "Core Network Installation – Zain",
                tech: ["Ericsson", "Core Network", "Zain"]
            },
            {
                title: "Ericsson",
                description: "MW Link Deployment – Orange Network",
                tech: ["Ericsson", "MW Link", "Orange"]
            }
        ]
    },
    2025: {
        summary: "Next-gen telecom, submarine cable, FTTH, and core network projects.",
        projects: [
            {
                title: "Nokia",
                description: "SWAP & 5G Add-On – Zain Network",
                tech: ["Nokia", "5G", "SWAP", "Zain"]
            },
            {
                title: "Nokia",
                description: "SWAP & 5G Add-On – Orange Network",
                tech: ["Nokia", "5G", "SWAP", "Orange"]
            },
            {
                title: "Fiber-tech",
                description: "FTTH Deployment – Naitel",
                tech: ["Fiber", "FTTH", "Naitel"]
            },
            {
                title: "Submarine Cable Project",
                description: "4.5 km",
                tech: ["Submarine Cable", "Deployment"]
            },
            {
                title: "Umniah",
                description: "Telecom, Power, and Civil Works",
                tech: ["Umniah", "Telecom", "Power", "Civil Works"]
            },
            {
                title: "Orange",
                description: "Telecom, Power, and Civil Works",
                tech: ["Orange", "Telecom", "Power", "Civil Works"]
            },
            {
                title: "Ericsson",
                description: "Core Network Installation – Zain",
                tech: ["Ericsson", "Core Network", "Zain"]
            },
            {
                title: "Ericsson",
                description: "MW Link Deployment – Orange Network",
                tech: ["Ericsson", "MW Link", "Orange"]
            },
            {
                title: "Huawei",
                description: "Core Network Installation – Zain",
                tech: ["Huawei", "Core Network", "Zain"]
            }
        ]
    }
};

// Enhanced application state management
class TimelineApp {
    constructor() {
        this.currentView = 'compact';
        this.activeYear = null;
        this.filteredYears = Object.keys(projectsData).sort((a, b) => b - a);
        this.isExpanded = false;
        this.debounceTimeout = null;
        this.eventListeners = new Map(); // Track event listeners for cleanup
        this.cachedElements = new Map(); // Cache DOM elements

        this.init();
    }

    init() {
        try {
            this.setupEventListeners();
            this.renderViews();
            this.setupAccessibility();
            this.handleInitialFocus();
            this.setupIntersectionObserver(); // For lazy loading
        } catch (error) {
            this.handleError('Failed to initialize application', error);
        }
    }

    setupEventListeners() {
        // Use event delegation where possible for better performance
        const compactView = document.getElementById('compactView');
        const traditionalView = document.getElementById('traditionalView');

        // View toggle buttons
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            this.addEventListener(btn, 'click', (e) => this.switchView(e.target.dataset.view));
        });

        // Year filter
        const yearSelect = document.getElementById('yearRange');
        if (yearSelect) {
            this.addEventListener(yearSelect, 'change', (e) => this.handleYearFilter(e));
        }

        // Help button and close button
        const helpBtn = document.querySelector('.help-btn');
        if (helpBtn) {
            this.addEventListener(helpBtn, 'click', () => this.showHelp());
        }
        const closeBtn = document.querySelector('.modal .close-btn');
        if (closeBtn) {
            this.addEventListener(closeBtn, 'click', () => this.hideHelp());
        }

        // Projects close button
        const projectsCloseBtn = document.querySelector('.projects-close-btn');
        if (projectsCloseBtn) {
            this.addEventListener(projectsCloseBtn, 'click', () => this.collapseProjects());
        }

        // Keyboard navigation
        this.addEventListener(document, 'keydown', (e) => this.handleKeyboard(e));

        // Modal close on outside click
        const helpModal = document.getElementById('helpModal');
        if (helpModal) {
            this.addEventListener(helpModal, 'click', (e) => {
                if (e.target.classList.contains('modal-overlay')) {
                    this.hideHelp();
                }
            });
        }

        // Responsive handling with debounce
        this.addEventListener(window, 'resize', () => this.debounceResize());

        // Focus management
        this.addEventListener(document, 'focusin', (e) => this.handleFocus(e));
    }

    // Helper method to add and track event listeners
    addEventListener(element, event, handler) {
        if (!element || typeof element.addEventListener !== 'function') {
            console.warn('Invalid element for event listener:', element);
            return;
        }

        element.addEventListener(event, handler);

        // Track the listener for cleanup
        if (!this.eventListeners.has(element)) {
            this.eventListeners.set(element, new Map());
        }
        this.eventListeners.get(element).set(event, handler);
    }

    // Helper method to remove tracked event listeners
    removeEventListeners() {
        this.eventListeners.forEach((events, element) => {
            events.forEach((handler, event) => {
                element.removeEventListener(event, handler);
            });
        });
        this.eventListeners.clear();
    }

    // Get DOM element with caching
    getElement(id) {
        if (!this.cachedElements.has(id)) {
            this.cachedElements.set(id, document.getElementById(id));
        }
        return this.cachedElements.get(id);
    }

    setupIntersectionObserver() {
        // Setup IntersectionObserver for lazy loading of older years
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.dataset.lazyLoad) {
                        this.loadLazyContent(entry.target);
                    }
                });
            }, {
                rootMargin: '200px'
            });
        }
    }

    loadLazyContent(element) {
        // Implementation for lazy loading content
        const year = element.dataset.year;
        if (year && projectsData[year]) {
            // Load the content for this year
            element.classList.remove('lazy-load');
            element.removeAttribute('data-lazy-load');

            if (this.observer) {
                this.observer.unobserve(element);
            }
        }
    }

    setupAccessibility() {
        // Add ARIA labels and roles
        const compactCards = document.querySelectorAll('.compact-year-card');
        compactCards.forEach((card) => {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-expanded', 'false');
            const year = card.dataset.year;
            if (year) {
                card.setAttribute('aria-describedby', `year-summary-${year}`);
            }
        });

        // Timeline markers
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        timelineMarkers.forEach(marker => {
            marker.setAttribute('role', 'button');
            marker.setAttribute('tabindex', '0');
            marker.setAttribute('aria-expanded', 'false');
            const timelineItem = marker.closest('.timeline-item');
            if (timelineItem && timelineItem.dataset.year) {
                marker.setAttribute('aria-label', `View projects for ${timelineItem.dataset.year}`);
            }
        });
    }

    handleInitialFocus() {
        // Ensure first interactive element is focusable
        const firstCard = document.querySelector('.compact-year-card');
        if (firstCard) {
            firstCard.setAttribute('tabindex', '0');
        }
    }

    renderViews() {
        try {
            // Use requestAnimationFrame for smoother rendering
            requestAnimationFrame(() => {
                this.renderCompactView();
                this.renderTraditionalView();
            });
        } catch (error) {
            this.handleError('Failed to render views', error);
        }
    }

    renderCompactView() {
        const container = this.getElement('compactView');
        if (!container) return;

        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();

        const allYears = this.filteredYears;
        const recentYears = allYears.filter(year => parseInt(year) >= 2020);
        const olderYears = allYears.filter(year => parseInt(year) < 2020);

        // Render recent years
        recentYears.forEach(year => {
            const yearData = projectsData[year];
            if (yearData) {
                const card = this.createCompactYearCard(year, yearData);
                fragment.appendChild(card);
            }
        });

        // Add explore more button if needed
        if (!this.isExpanded && olderYears.length > 0) {
            const btn = this.createExploreButton(olderYears.length, () => {
                this.isExpanded = true;
                this.renderCompactView();
            });
            fragment.appendChild(btn);
        }

        // Render older years if expanded
        if (this.isExpanded) {
            olderYears.forEach(year => {
                const yearData = projectsData[year];
                if (yearData) {
                    const card = this.createCompactYearCard(year, yearData);
                    fragment.appendChild(card);
                }
            });

            // Add show less button
            const btn = this.createShowLessButton(() => {
                this.isExpanded = false;
                this.renderCompactView();
                this.scrollToYear('2020');
            });
            fragment.appendChild(btn);
        }

        // Clear container and append fragment in one operation
        container.innerHTML = '';
        container.appendChild(fragment);
    }

    renderTraditionalView() {
        const container = this.getElement('traditionalView');
        if (!container) return;

        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();

        // Add timeline line
        const timelineLine = document.createElement('div');
        timelineLine.className = 'timeline-line';
        timelineLine.setAttribute('aria-hidden', 'true');
        fragment.appendChild(timelineLine);

        const allYears = this.filteredYears;
        const recentYears = allYears.filter(year => parseInt(year) >= 2020);
        const olderYears = allYears.filter(year => parseInt(year) < 2020);

        // Render recent years
        recentYears.forEach(year => {
            const yearData = projectsData[year];
            if (yearData) {
                const item = this.createTraditionalTimelineItem(year, yearData);
                fragment.appendChild(item);
            }
        });

        // Add explore more button if needed
        if (!this.isExpanded && olderYears.length > 0) {
            const exploreContainer = this.createButtonContainer();
            const btn = this.createExploreButton(olderYears.length, () => {
                this.isExpanded = true;
                this.renderTraditionalView();
            });
            exploreContainer.appendChild(btn);
            fragment.appendChild(exploreContainer);
        }

        // Render older years if expanded
        if (this.isExpanded) {
            olderYears.forEach(year => {
                const yearData = projectsData[year];
                if (yearData) {
                    const item = this.createTraditionalTimelineItem(year, yearData);
                    fragment.appendChild(item);
                }
            });

            // Add show less button
            const showLessContainer = this.createButtonContainer();
            const btn = this.createShowLessButton(() => {
                this.isExpanded = false;
                this.renderTraditionalView();
                this.scrollToYear('2020');
            });
            showLessContainer.appendChild(btn);
            fragment.appendChild(showLessContainer);
        }

        // Clear container and append fragment in one operation
        container.innerHTML = '';
        container.appendChild(fragment);
    }

    createCompactYearCard(year, yearData) {
        const card = document.createElement('div');
        card.className = 'compact-year-card';
        card.dataset.year = year;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-expanded', 'false');

        const projects = yearData?.projects || [];
        const summary = yearData?.summary || 'No summary available';
        const uniqueTechs = [...new Set(projects.flatMap(p => p?.tech || []))].slice(0, 5);

        // Use template literals for cleaner HTML creation
        card.innerHTML = `
                    <div class="year-header">
                        <div class="year-number">${this.escapeHtml(year)}</div>
                        <div class="project-count">${projects.length} project${projects.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div class="year-summary" id="year-summary-${year}">${this.escapeHtml(summary)}</div>
                    <div class="tech-preview">
                        ${uniqueTechs.map(tech => `<span class="tech-tag-small">${this.escapeHtml(tech)}</span>`).join('')}
                        ${uniqueTechs.length === 5 ? '<span class="tech-tag-small">+more</span>' : ''}
                    </div>
                `;

        this.addEventListener(card, 'click', () => this.toggleYearProjects(year, card));
        this.addEventListener(card, 'keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleYearProjects(year, card);
            }
        });

        return card;
    }

    createTraditionalTimelineItem(year, yearData) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.dataset.year = year;

        const projects = yearData?.projects || [];
        const summary = yearData?.summary || 'No summary available';

        item.innerHTML = `
                    <div class="timeline-marker" role="button" tabindex="0" aria-expanded="false" aria-label="View projects for ${year}"></div>
                    <div class="timeline-content">
                        <div class="year-header">
                            <div class="year-number">${this.escapeHtml(year)}</div>
                            <div class="project-count">${projects.length} project${projects.length !== 1 ? 's' : ''}</div>
                        </div>
                        <div class="year-summary">${this.escapeHtml(summary)}</div>
                    </div>
                `;

        const marker = item.querySelector('.timeline-marker');
        this.addEventListener(marker, 'click', () => this.toggleYearProjects(year, item));
        this.addEventListener(marker, 'keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleYearProjects(year, item);
            }
        });

        return item;
    }

    createExploreButton(count, onClick) {
        const btn = document.createElement('button');
        btn.className = 'explore-btn';
        btn.textContent = `Explore More (${count} more years)`;
        btn.setAttribute('aria-label', `Show ${count} additional years`);
        this.addEventListener(btn, 'click', onClick);
        return btn;
    }

    createShowLessButton(onClick) {
        const btn = document.createElement('button');
        btn.className = 'show-less-btn';
        btn.textContent = 'Show Less';
        btn.setAttribute('aria-label', 'Hide older years');
        this.addEventListener(btn, 'click', onClick);
        return btn;
    }

    createButtonContainer() {
        const container = document.createElement('div');
        container.className = 'timeline-item';
        container.style.cssText = `
                    display: flex;
                    justify-content: center;
                    padding: 2rem 0;
                    margin-bottom: 2rem;
                `;
        return container;
    }

    toggleYearProjects(year, element) {
        const projectsSection = this.getElement('projectsSection');
        const projectsGrid = this.getElement('projectsGrid');
        const projectsTitle = this.getElement('projectsTitle');

        if (!projectsSection || !projectsGrid || !projectsTitle) {
            this.handleError('Required elements not found');
            return;
        }

        // If clicking the same year, toggle collapse
        if (this.activeYear === year && projectsSection.classList.contains('visible')) {
            this.collapseProjects();
            return;
        }

        // Update active states
        this.updateActiveStates(element);
        this.activeYear = year;

        // Show loading state
        projectsGrid.innerHTML = '<div class="loading">Loading projects...</div>';
        projectsTitle.textContent = `${year} Projects`;
        projectsSection.classList.add('visible');

        // Announce to screen readers
        projectsGrid.setAttribute('aria-live', 'polite');

        // Simulate loading delay for better UX
        setTimeout(() => {
            try {
                const yearData = projectsData[year];
                if (yearData && yearData.projects) {
                    this.renderProjects(yearData.projects);
                } else {
                    this.renderProjects([]);
                }

                // Smooth scroll to projects section
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } catch (error) {
                this.handleError('Failed to load projects', error);
                projectsGrid.innerHTML = '<p class="no-projects">Error loading projects. Please try again.</p>';
            }
        }, 200);
    }

    collapseProjects() {
        const projectsSection = this.getElement('projectsSection');
        if (projectsSection) {
            projectsSection.classList.remove('visible');
        }

        // Remove all active states
        document.querySelectorAll('.compact-year-card.active, .timeline-marker.active').forEach(el => {
            el.classList.remove('active');
            el.setAttribute('aria-expanded', 'false');
        });

        this.activeYear = null;
    }

    updateActiveStates(activeElement) {
        // Remove all active states
        document.querySelectorAll('.compact-year-card.active').forEach(card => {
            card.classList.remove('active');
            card.setAttribute('aria-expanded', 'false');
        });
        document.querySelectorAll('.timeline-marker.active').forEach(marker => {
            marker.classList.remove('active');
            marker.setAttribute('aria-expanded', 'false');
        });

        // Add active state to current element
        if (this.currentView === 'compact') {
            activeElement.classList.add('active');
            activeElement.setAttribute('aria-expanded', 'true');
        } else {
            const marker = activeElement.querySelector('.timeline-marker');
            if (marker) {
                marker.classList.add('active');
                marker.setAttribute('aria-expanded', 'true');
            }
        }
    }

    renderProjects(projects) {
        const projectsGrid = this.getElement('projectsGrid');
        if (!projectsGrid) return;

        if (!projects || projects.length === 0) {
            projectsGrid.innerHTML = '<p class="no-projects">No projects available for this year.</p>';
            return;
        }

        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();

        projects.forEach((project, index) => {
            try {
                const projectCard = this.createProjectCard(project, index);
                fragment.appendChild(projectCard);
            } catch (error) {
                console.error('Error creating project card:', error);
                const fallbackCard = this.createFallbackProjectCard(index);
                fragment.appendChild(fallbackCard);
            }
        });

        // Clear and append in one operation
        projectsGrid.innerHTML = '';
        projectsGrid.appendChild(fragment);
    }

    createProjectCard(project, index) {
        if (!project) {
            throw new Error('Project data is missing');
        }

        const card = document.createElement('div');
        card.className = 'project-card safari-only-fix'; // Add Safari fix class
        card.style.animationDelay = `${index * 0.1}s`;

        const title = project.title || `Project ${index + 1}`;
        const description = project.description || 'No description available';
        const tech = project.tech || [];

        card.innerHTML = `
                    <h3 class="project-title">${this.escapeHtml(title)}</h3>
                    <div class="project-description">${description}</div>
                    <div class="project-tech">
                        ${tech.map(tech => `<span class="tech-tag">${this.escapeHtml(tech)}</span>`).join('')}
                    </div>
                `;

        return card;
    }

    createFallbackProjectCard(index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
                    <h3 class="project-title">Project ${index + 1}</h3>
                    <p class="project-description">Unable to load project details</p>
                `;
        return card;
    }

    switchView(viewType) {
        if (!viewType || (viewType !== 'compact' && viewType !== 'traditional')) {
            console.error('Invalid view type:', viewType);
            return;
        }

        const compactView = this.getElement('compactView');
        const traditionalView = this.getElement('traditionalView');
        const toggleBtns = document.querySelectorAll('.toggle-btn');

        if (!compactView || !traditionalView) {
            console.error('Required view elements not found');
            return;
        }

        // Update button states
        toggleBtns.forEach(btn => {
            const isActive = btn.dataset.view === viewType;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Switch views with smooth transition
        if (viewType === 'compact') {
            compactView.style.display = 'grid';
            traditionalView.style.display = 'none';
            compactView.setAttribute('aria-hidden', 'false');
            traditionalView.setAttribute('aria-hidden', 'true');
        } else {
            compactView.style.display = 'none';
            traditionalView.style.display = 'block';
            compactView.setAttribute('aria-hidden', 'true');
            traditionalView.setAttribute('aria-hidden', 'false');
        }

        this.currentView = viewType;
        this.collapseProjects();

        // Announce view change to screen readers
        const announcement = `Switched to ${viewType} view`;
        this.announceToScreenReader(announcement);
    }

    handleYearFilter(e) {
        const filterValue = e.target.value;
        const currentYear = new Date().getFullYear();

        switch (filterValue) {
            case 'recent':
                this.filteredYears = Object.keys(projectsData)
                    .filter(year => parseInt(year) >= 2020)
                    .sort((a, b) => b - a);
                break;
            case 'modern':
                this.filteredYears = Object.keys(projectsData)
                    .filter(year => parseInt(year) >= 2015 && parseInt(year) <= 2019)
                    .sort((a, b) => b - a);
                break;
            case 'early':
                this.filteredYears = Object.keys(projectsData)
                    .filter(year => parseInt(year) <= 2014)
                    .sort((a, b) => b - a);
                break;
            default:
                this.filteredYears = Object.keys(projectsData)
                    .sort((a, b) => b - a);
        }

        // Reset expansion state when filter changes
        this.isExpanded = false;

        // Re-render both views
        this.renderViews();

        // Collapse projects
        this.collapseProjects();

        // Announce filter change
        const announcement = `Filtered to show ${this.filteredYears.length} years`;
        this.announceToScreenReader(announcement);
    }

    handleKeyboard(e) {
        switch (e.key) {
            case 'Escape':
                if (this.getElement('helpModal')?.classList.contains('visible')) {
                    this.hideHelp();
                } else if (this.activeYear) {
                    this.collapseProjects();
                }
                break;
            case 'h':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.showHelp();
                }
                break;
        }
    }

    handleFocus(e) {
        // Ensure focused elements are visible and accessible
        if (e.target.classList.contains('compact-year-card') ||
            e.target.classList.contains('timeline-marker')) {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    debounceResize() {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
            // Handle responsive layout changes
            if (window.innerWidth <= 768) {
                document.body.classList.add('mobile-view');
            } else {
                document.body.classList.remove('mobile-view');
            }
        }, 250);
    }

    scrollToYear(year) {
        setTimeout(() => {
            const element = document.querySelector(`[data-year="${year}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    showHelp() {
        const modal = this.getElement('helpModal');
        if (modal) {
            modal.classList.add('visible');
            const closeBtn = modal.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.focus();
            }
            // Prevent background scrolling
            document.body.style.overflow = 'hidden';
        }
    }

    hideHelp() {
        const modal = this.getElement('helpModal');
        if (modal) {
            modal.classList.remove('visible');
            document.body.style.overflow = '';
            // Return focus to help button
            const helpBtn = document.querySelector('.help-btn');
            if (helpBtn) {
                helpBtn.focus();
            }
        }
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.cssText = `
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                `;
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    escapeHtml(text) {
        if (typeof text !== 'string') {
            return String(text);
        }
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    handleError(message, error = null) {
        console.error(message, error);

        // Show user-friendly error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
                    <h3>Something went wrong</h3>
                    <p>${this.escapeHtml(message)}</p>
                    <button onclick="this.parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: white; color: var(--color-brand-red); border: 1px solid white; border-radius: 4px; cursor: pointer;">
                        Close
                    </button>
                `;
        document.body.appendChild(errorDiv);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 10000);
    }

    // Cleanup method to prevent memory leaks
    destroy() {
        this.removeEventListeners();
        this.cachedElements.clear();

        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }

        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    try {
        window.timelineApp = new TimelineApp();

        // Add cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (window.timelineApp) {
                window.timelineApp.destroy();
            }
        });
    } catch (error) {
        console.error('Failed to initialize timeline application:', error);

        // Fallback error display
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
                    <h3>Application Error</h3>
                    <p>Unable to load the timeline. Please refresh the page.</p>
                    <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: white; color: var(--color-brand-red); border: 1px solid white; border-radius: 4px; cursor: pointer;">
                        Refresh Page
                    </button>
                `;
        document.body.appendChild(errorDiv);
    }
});

// Handle unhandled errors
window.addEventListener('error', function (e) {
    console.error('Unhandled error:', e.error);
});

window.addEventListener('unhandledrejection', function (e) {
    console.error('Unhandled promise rejection:', e.reason);
});