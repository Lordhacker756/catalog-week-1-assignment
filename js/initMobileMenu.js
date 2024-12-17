export const initMenu = () => {
    const menuBtn = document.querySelector('.navbar__menu-btn');
    const closeBtn = document.querySelector('.navbar__close');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
    const mobileLinks = document.querySelectorAll('.navbar__mobile-links li');

    const toggleMenu = (show) => {
        mobileMenu.classList.toggle('active');
        closeBtn.classList.toggle('active');

        // Animate links
        mobileLinks.forEach((link, index) => {
            if (show) {
                link.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.3}s`;
            } else {
                link.style.animation = '';
            }
        });
    };

    menuBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
}