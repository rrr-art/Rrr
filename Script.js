document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        // Toggles the 'active' class to show/hide the menu on mobile
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (for single-page navigation)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });


    // --- 2. Simple Contact Form Submission Handler ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the form from actually submitting (since there's no backend)

        // In a real deployed GitHub Pages site, you'd integrate a service like Netlify Forms here.

        // Simulate a successful submission
        contactForm.style.display = 'none'; // Hide the form inputs
        formMessage.style.display = 'block'; // Show the success message

        // Optional: Re-show form after a few seconds
        setTimeout(() => {
            contactForm.style.display = 'block';
            formMessage.style.display = 'none';
            contactForm.reset(); // Clear the form fields
        }, 5000);
    });
});
