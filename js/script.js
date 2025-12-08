document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Video Sound Toggle Simulation
    // Note: Since we are using an iframe, custom controls require the YouTube Player API.
    // The button has been hidden in HTML for now.
    /*
    const soundToggle = document.querySelector('.sound-toggle');
    const videoIcon = document.querySelector('.video-placeholder i');
    let isMuted = true;

    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            isMuted = !isMuted;
            const icon = this.querySelector('i');
            
            if (isMuted) {
                icon.classList.remove('fa-volume-high');
                icon.classList.add('fa-volume-xmark');
                console.log('Video muted');
            } else {
                icon.classList.remove('fa-volume-xmark');
                icon.classList.add('fa-volume-high');
                console.log('Video unmuted');
            }
        });
    }
    */

    // Form Submission Handling
    const form = document.querySelector('.waitlist-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Merci ! L'adresse ${email} a été ajoutée à la liste d'attente.`);
                emailInput.value = '';
            }
        });
    }
});
