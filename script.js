/**
 * RHEIVATECH // PERFORMANCE USER INTERFACE MATRIX
 * Implementation: Scroll Reveals, High-Availability Carousel, & Mobile Drawer
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // CORE LAYOUT INITIALIZATION PASS
    initMobileNavigation();
    initScrollRevealEngine();
    initCoreCarousel();
    initSmoothNavigation();
    initTerminalProtocol();

    /**
     * SYSTEM 01: MOBILE NAVIGATION DRAWER INTERACTION
     * Standard click state tracking to toggle responsive menu visibility
     */
    function initMobileNavigation() {
        const header = document.querySelector(".global-header");
        const toggleBtn = document.querySelector(".mobile-nav-toggle");
        const navLinks = document.querySelectorAll(".nav-item, .btn-nav-action");

        if (!toggleBtn || !header) return;

        // Toggle mobile view state on menu button click
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            header.classList.toggle("nav-menu-open");
        });

        // Close menu immediately if a navigation target link is tapped
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                header.classList.remove("nav-menu-open");
            });
        });

        // Close menu structural fallback if user clicks anywhere outside active menu area
        document.addEventListener("click", (e) => {
            if (header.classList.contains("nav-menu-open") && !header.contains(e.target)) {
                header.classList.remove("nav-menu-open");
            }
        });
    }

    /**
     * SYSTEM 02: HIGH-PERFORMANCE INTERSECTION OBSERVER SCROLL ENGINE
     * Binds structural layout objects and triggers CSS reveal transformations
     */
    function initScrollRevealEngine() {
        const revealElements = document.querySelectorAll(".reveal-on-scroll");
        
        if (revealElements.length === 0) return;

        // Configuration profile optimized to clear animations before elements crowd the center viewport
        const observerOptions = {
            root: null, // Viewport standard relative tracking
            rootMargin: "0px",
            threshold: 0.12 // Trigger configuration point when 12% of the block becomes visible
        };

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Cease observation of targeted block once component is loaded securely to save memory
                    observer.unobserve(entry.target);
                }
            });
        };

        const scrollObserver = new IntersectionObserver(revealCallback, observerOptions);

        revealElements.forEach(element => {
            scrollObserver.observe(element);
        });
    }

    /**
     * SYSTEM 03: CORE COLLECTIVE CAROUSEL SLIDER ENGINE
     * Dynamically shifts slider track nodes and modifies indexing indicators
     */
    function initCoreCarousel() {
        const track = document.querySelector(".carousel-slider-track");
        const slides = Array.from(document.querySelectorAll(".carousel-slide"));
        const nextBtn = document.querySelector(".next-arrow");
        const prevBtn = document.querySelector(".prev-arrow");
        const indicator = document.querySelector(".slide-numeric-index");

        if (!track || slides.length === 0) return;

        let currentIndex = 0;

        const updateCarouselState = () => {
            const translationDistance = currentIndex * 100;
            track.style.transform = `translateX(-${translationDistance}%)`;

            // Adjust active visibility states across components
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });

            // Re-render numeric indices matching layout index shifts (e.g. 01 / 02)
            const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
            const formattedTotal = String(slides.length).padStart(2, '0');
            if (indicator) {
                indicator.textContent = `${formattedCurrent} / ${formattedTotal}`;
            }
        };

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            updateCarouselState();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            updateCarouselState();
        });

        updateCarouselState();
    }

    /**
     * SYSTEM 04: DEEP NAVIGATIONAL SMOOTH ANCHOR VIEWS
     */
    function initSmoothNavigation() {
        const structuralLinks = document.querySelectorAll(".nav-item, .btn-primary-glow, .btn-nav-action");

        structuralLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const targetId = link.getAttribute("href");
                
                if (targetId && targetId.startsWith("#")) {
                    e.preventDefault();
                    const elementNode = document.querySelector(targetId);
                    
                    if (elementNode) {
                        elementNode.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }
            });
        });
    }

    /**
     * SYSTEM 05: CONNECTION PROTOCOL ENCRYPTED ACTION RESPONSE
     */
    function initTerminalProtocol() {
        const connectBtn = document.querySelector(".btn-terminal-trigger");

        if (connectBtn) {
            connectBtn.addEventListener("click", () => {
                const legacyLabel = connectBtn.textContent;
                connectBtn.textContent = "[ INITIALIZING_HANDSHAKE_SEQUENCE... ]";
                connectBtn.style.opacity = "0.6";
                
                setTimeout(() => {
                    alert("SECURE CHANNEL READY: Ready to point this terminal action to an enterprise mailing setup or custom system logging engine.");
                    connectBtn.textContent = legacyLabel;
                    connectBtn.style.opacity = "1";
                }, 1400);
            });
        }
    }
});