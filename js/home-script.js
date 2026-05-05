// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebarMenu = document.querySelector('.sidebar-menu');

if (menuToggle && sidebarMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebarMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebarMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            sidebarMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sidebarMenu.classList.remove('active');
        });
    });
}

// Location tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Here you can add logic to show/hide different banya cards based on location
        // For now, we'll just toggle the active state
    });
});

// Smooth scroll for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button, .sidebar-cta');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your booking/navigation logic here
        console.log('CTA button clicked');
        // Example: window.location.href = '/booking';
    });
});

// Details button functionality
const detailsButtons = document.querySelectorAll('.details-button');

detailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const banyaCard = button.closest('.banya-card');
        const banyaName = banyaCard.querySelector('.banya-name').textContent.trim();

        console.log(`Details clicked for: ${banyaName}`);
        // Add navigation to banya details page
        // Example: window.location.href = `/banya/${banyaName.toLowerCase()}`;
    });
});

// Add hover effects and animations
const cards = document.querySelectorAll('.rest-card, .banya-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Hero section is always visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// Sidebar navigation active state on scroll
const navLinksAll = document.querySelectorAll('.nav-link');
const sectionsAll = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sectionsAll.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

