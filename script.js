document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------
    // Feature 1: Mobile Hamburger Menu Toggle
    // -------------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // -------------------------------------------------------------
    // Feature 2: Dynamic Typing Effect
    // -------------------------------------------------------------
    const typingElement = document.getElementById('typingEffect');
    const roles = ['a Multimedia Computing Student.'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 90;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    // -------------------------------------------------------------
    // Feature 3: Scroll-to-Top Button
    // -------------------------------------------------------------
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // -------------------------------------------------------------
    // Feature 4: Interactive Header Glow on Scroll
    // -------------------------------------------------------------
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.borderColor = 'rgba(0, 240, 255, 0.4)';
            } else {
                navbar.style.borderColor = 'rgba(0, 240, 255, 0.15)';
            }
        }
    });

    // -------------------------------------------------------------
    // Feature 5: Form Validation
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formStatus.style.color = '#ff4d4d';
                formStatus.textContent = 'Please fill in all fields.';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.style.color = '#ff4d4d';
                formStatus.textContent = 'Please enter a valid email address.';
                return;
            }

            formStatus.style.color = '#00f0ff';
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
        });
    }

});