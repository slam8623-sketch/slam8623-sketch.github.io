// Enable smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Add smooth navigation link scrolling
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add hover effects to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f4ff';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});

// Add click effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Scroll to types section
        document.querySelector('#types').scrollIntoView({ behavior: 'smooth' });
    });
}

// Add resource link click animations
const resourceLinks = document.querySelectorAll('.resource-links a');
resourceLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Console welcome message
console.log('%c🍣 Welcome to Sushi Page! 🍣', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cLearn more about sushi today!', 'font-size: 14px; color: #764ba2;');

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});
