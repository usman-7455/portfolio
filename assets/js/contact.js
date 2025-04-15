document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
        `;
        
        // Clear form
        contactForm.reset();
        
        // Replace form with success message
        contactForm.parentNode.replaceChild(successMessage, contactForm);
        
        // Animate success message
        anime({
            targets: successMessage,
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutExpo'
        });
        
        // Animate check icon
        anime({
            targets: successMessage.querySelector('i'),
            scale: [0, 1],
            rotate: [0, 360],
            duration: 1000,
            easing: 'easeOutElastic'
        });
    });
    
    // Add animation to form elements
    const formGroups = document.querySelectorAll('.form-group');
    
    anime({
        targets: formGroups,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });
    
    // Add animation to contact info items
    const infoItems = document.querySelectorAll('.info-item');
    
    anime({
        targets: infoItems,
        opacity: [0, 1],
        translateX: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });
});