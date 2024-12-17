import renderTestimonials from "./renderTestimonials";
let currIdx = 0;

const scrollTestimonials = (direction) => {
    const container = document.querySelector('.testimonials__cards');
    const card = document.querySelector('.testimonials__card');

    if (!container || !card) return;

    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(container).gap);
    const scrollAmount = cardWidth + gap;

    // Get max scroll based on viewport
    const maxVisibleItems = () => {
        if (window.innerWidth >= 1024) return 3; // Desktop
        if (window.innerWidth >= 768) return 2;  // Tablet
        return 1; // Mobile
    };

    const maxScrollIdx = document.querySelectorAll('.testimonials__card').length - maxVisibleItems();

    if (direction === 'next' && currIdx < maxScrollIdx) {
        currIdx++;
    } else if (direction === 'prev' && currIdx > 0) {
        currIdx--;
    }

    container.style.transform = `translateX(-${currIdx * scrollAmount}px)`;
};

const initTestimonialCarousel = () => {
    renderTestimonials();
    const prevBtn = document.querySelector('.testimonials__cards--prev');
    const nextBtn = document.querySelector('.testimonials__cards--next');

    prevBtn?.addEventListener('click', () => scrollTestimonials('prev'));
    nextBtn?.addEventListener('click', () => scrollTestimonials('next'));

    // Handle resize
    window.addEventListener('resize', () => {
        // Reset position on resize
        const container = document.querySelector('.testimonials__cards');
        currIdx = 0;
        container.style.transform = 'translateX(0)';
    });
};

export default initTestimonialCarousel;