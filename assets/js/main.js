document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const animationClass = element.classList[1];
                element.classList.add(animationClass);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Load projects dynamically
    const projectsGrid = document.querySelector('.projects-grid');
    
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution with seamless checkout experience.",
            tags: ["UI/UX", "Web Development", "E-Commerce"],
            image: "assets/images/project1.jpg"
        },
        {
            title: "Mobile App Design",
            description: "Fitness tracking application with personalized workout plans.",
            tags: ["App Design", "User Experience"],
            image: "assets/images/project2.jpg"
        },
        {
            title: "Brand Identity",
            description: "Complete brand identity for a startup coffee company.",
            tags: ["Branding", "Logo Design"],
            image: "assets/images/project3.jpg"
        }
    ];
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'animate__animated', 'animate__fadeInUp');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="btn-secondary">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Advanced animations with Anime.js
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .btn-primary');
    
    anime({
        targets: heroTitle,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500
    });
    
    anime({
        targets: heroSubtitle,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000
    });
    
    anime({
        targets: heroButton,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1500
    });
    
    // Floating shape animations
    const shape1 = document.querySelector('.shape1');
    const shape2 = document.querySelector('.shape2');
    const shape3 = document.querySelector('.shape3');
    
    anime({
        targets: shape1,
        translateX: [0, 50],
        translateY: [0, -50],
        duration: 15000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: shape2,
        translateX: [0, -30],
        translateY: [0, 30],
        duration: 12000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        delay: 2000
    });
    
    anime({
        targets: shape3,
        translateX: [0, 20],
        translateY: [0, -20],
        duration: 10000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        delay: 3000
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});