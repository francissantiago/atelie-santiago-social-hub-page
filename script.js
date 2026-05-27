// Social Hub Page - Ateliê Santiago
// Interactive functionality for the social hub page

document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect on social cards
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Track social media clicks (optional analytics)
    socialCards.forEach(card => {
        card.addEventListener('click', function() {
            const socialNetwork = this.getAttribute('data-social');
            console.log(`User clicked on ${socialNetwork}`);
            // Add your analytics tracking here if needed
        });
    });
});
