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

    // Video Facade Pattern (Lazy Load YouTube)
    const videoWrapper = document.getElementById('video-wrapper');
    if (videoWrapper) {
        const thumbnail = videoWrapper.querySelector('.video-thumbnail');
        const caption = videoWrapper.querySelector('.video-caption');
        
        const loadVideo = () => {
            const videoId = videoWrapper.getAttribute('data-video-id');
            
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            // Autoplay is ON when user clicks
            iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1`);
            iframe.setAttribute('title', 'Ceepia Video');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            
            // Replace thumbnail with iframe
            thumbnail.style.display = 'none';
            if(caption) caption.style.display = 'none'; // Hide caption to not obstruct controls
            videoWrapper.appendChild(iframe);
        };

        thumbnail.addEventListener('click', loadVideo);
        
        // Allow keyboard activation (Enter key)
        thumbnail.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadVideo();
            }
        });
    }

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
