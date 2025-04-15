document.addEventListener('DOMContentLoaded', function() {
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-full');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project modal functionality
    const modal = document.querySelector('.project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-body');
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal.click();
        }
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Open modal when clicking project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on a link inside the card
            if (e.target.tagName === 'A') return;
            
            const projectTitle = this.querySelector('h2').textContent;
            const projectDescription = this.querySelector('.project-description').textContent;
            const projectTags = Array.from(this.querySelectorAll('.project-tag')).map(tag => tag.textContent);
            const projectImage = this.querySelector('img').src;
            
            modalContent.innerHTML = `
                <div class="modal-project-image">
                    <img src="${projectImage}" alt="${projectTitle}">
                </div>
                <div class="modal-project-info">
                    <h2>${projectTitle}</h2>
                    <div class="modal-project-tags">
                        ${projectTags.map(tag => `<span class="modal-project-tag">${tag}</span>`).join('')}
                    </div>
                    <p>${projectDescription}</p>

                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Animate modal content
            anime({
                targets: '.modal-project-image, .modal-project-info',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutExpo',
                delay: anime.stagger(100)
            });
        });
    });
    
    // Animate project cards on scroll
    const animateProjects = function() {
        const elements = document.querySelectorAll('.project-card-full');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                anime({
                    targets: element,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutExpo',
                    delay: index * 100
                });
            }
        });
    };
    
    window.addEventListener('scroll', animateProjects);
    animateProjects(); // Run once on page load
});