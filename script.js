// Pravesh 2K25 - JavaScript Functionality

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Start curtain animation (respect reduced motion)
    if (!reduceMotion) {
        initializeCurtainAnimation();
    } else {
        const curtain = document.getElementById('curtain');
        const mainContent = document.getElementById('main-content');
        if (curtain) curtain.classList.add('hidden');
        if (mainContent) mainContent.classList.add('visible');
    }

    // Curtain fail-safe: ensure content is visible even if animation fails
    ensureContentVisibleFailsafe();
    
    // Initialize countdown timer
    initializeCountdown();
    
    // Initialize floating particles (reduced for small screens or disabled for reduced motion)
    if (!reduceMotion) {
        createFloatingParticles();
    }
    
    // Initialize scroll animations (skip if reduced motion)
    if (!reduceMotion) {
        initializeScrollAnimations();
    }
    
    // Initialize smooth scrolling for anchor links
    initializeSmoothScrolling(reduceMotion);
});

// Also ensure after full window load
window.addEventListener('load', ensureContentVisibleFailsafe);

function ensureContentVisibleFailsafe() {
    const curtain = document.getElementById('curtain');
    const mainContent = document.getElementById('main-content');
    if (!curtain || !mainContent) return;

    // If already visible, skip
    if (mainContent.classList.contains('visible')) return;

    // Use a short timeout to allow normal animation, but force-show if stuck
    setTimeout(() => {
        curtain.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 3000); // force reveal after 3s max
}

// Curtain Animation
function initializeCurtainAnimation() {
    const curtain = document.getElementById('curtain');
    const mainContent = document.getElementById('main-content');
    if (!curtain || !mainContent) return;
    
    // Start opening animation after a brief delay
    setTimeout(() => {
        curtain.classList.add('opening');
        
        // Hide curtain and show main content after animation completes
        setTimeout(() => {
            curtain.classList.add('hidden');
            mainContent.classList.add('visible');
        }, 2000);
    }, 500);
}

// Countdown Timer
function initializeCountdown() {
    // Use component constructor to avoid timezone parsing issues on some mobile browsers
    const targetDate = new Date(2025, 9, 11, 11, 0, 0).getTime(); // Oct is month index 9

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    function updateCountdown() {
        const now = Date.now();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        } else {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
        }
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Floating Particles
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    const isSmallScreen = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const particleCount = isSmallScreen ? 20 : 50;
    
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: bounce-gentle ${2 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            opacity: 0.7;
            will-change: transform;
        `;
        fragment.appendChild(particle);
    }
    particlesContainer.appendChild(fragment);
    
    // Add bounce animation to CSS if not already present
    if (!document.querySelector('#bounce-animation')) {
        const style = document.createElement('style');
        style.id = 'bounce-animation';
        style.textContent = `
            @keyframes bounce-gentle {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    if (typeof IntersectionObserver === 'undefined') return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(`
        .event-info-card,
        .highlight-card,
        .sponsor-card,
        .booking-card,
        .special-note,
        .partnership-cta
    `);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth Scrolling
function initializeSmoothScrolling(reduceMotion) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            if (typeof target.scrollIntoView === 'function') {
                target.scrollIntoView({
                    behavior: reduceMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            } else {
                // Fallback
                window.location.hash = href.substring(1);
            }
        }, { passive: true });
    });
}

// Book Now Function
function bookNow() {
    // Replace with actual BookMyShow URL when available
    const bookingUrl = 'https://in.bookmyshow.com';
    const newWin = window.open(bookingUrl, '_blank');
    if (!newWin) {
        // Popup blocked; fallback to same-tab navigation
        window.location.href = bookingUrl;
    }
    
    // Track booking attempt (you can add analytics here)
    console.log('Booking attempt tracked');
}

// Contact Sponsor Function
function contactSponsor() {
    // You can replace this with a contact form or email
    const email = 'sponsors@pravesh2k25.com';
    const subject = 'Sponsorship Inquiry - Pravesh 2K25';
    const body = 'Hi, I am interested in sponsoring Pravesh 2K25. Please provide more details about sponsorship packages.';
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Utility Functions
function debounce(func, wait) {
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

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize particles on resize
    const particlesContainer = document.querySelector('.floating-particles');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        createFloatingParticles();
    }
}, 250), { passive: true });

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Enhanced countdown with event completion handling
function handleEventCompletion() {
    const now = Date.now();
    // Local time to avoid parse issues
    const eventDate = new Date(2025, 9, 11, 19, 0, 0).getTime();
    
    if (now > eventDate) {
        // Event has passed
        const countdownSection = document.querySelector('.countdown-section');
        if (countdownSection) {
            countdownSection.innerHTML = `
                <div class="countdown-container">
                    <div class="countdown-header">
                        <h3 class="countdown-title">Event Completed!</h3>
                        <p class="countdown-subtitle">Thank you for making Pravesh 2K25 memorable!</p>
                    </div>
                </div>
            `;
        }
        
        // Update CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.textContent = '📸 View Event Photos';
            ctaButton.onclick = () => {
                // Redirect to photo gallery or social media
                window.open('https://instagram.com/pravesh2k25', '_blank');
            };
        }
    }
}

// Call event completion check
setTimeout(handleEventCompletion, 1000);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.classList.contains('cta-button') || 
            focusedElement.classList.contains('booking-button'))) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Add touch support for mobile devices (disabled swipe navigation by default to prevent scroll conflicts)
const enableSwipeNav = false;
let touchStartY = 0;
let touchEndY = 0;

if (enableSwipeNav) {
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - scroll to next section
            scrollToNextSection();
        } else {
            // Swipe down - scroll to previous section
            scrollToPreviousSection();
        }
    }
}

function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    const currentSection = getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToPreviousSection() {
    const sections = document.querySelectorAll('section');
    const currentSection = getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return section;
        }
    }
    
    return sections[0];
}

// Add performance monitoring (guarded)
if ('PerformanceObserver' in window) {
    const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
                console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
            }
        }
    });
    try {
        performanceObserver.observe({ entryTypes: ['navigation'] });
    } catch (_) {}
}

// Add accessibility improvements
function improveAccessibility() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, a, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #ffd700';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
}

// Initialize accessibility improvements
setTimeout(improveAccessibility, 1000);