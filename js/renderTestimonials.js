import testimonialData from '../constants/testimonials.json';

const generateStars = () => {
    return Array(5).fill(0).map(() => `
        <img
            src="/assets/icons/home/testimonials/star.svg"
            alt=""
            width="20"
            height="20"
        />`
    ).join('');
};

const renderTestimonials = () => {
    const cardsContainer = document.querySelector('.testimonials__cards');

    // Clear existing content
    cardsContainer.innerHTML = '';

    // Render testimonial cards
    testimonialData.testimonials.forEach(({ name, role, description, path }) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonials__card');

        testimonialCard.innerHTML = `
            <p class="testimonials__card--stars">
                ${generateStars()}
            </p>
            <p class="testimonials__card--review">
                ${description}
            </p>
            <div class="testimonials__card--person-container">
                <img
                    src="${path}"
                    alt="${name}"
                    class="testimonials__card--person-avatar"
                />
                <div class="testimonials__card--person">
                    <p class="testimonials__card--person-name">${name}</p>
                    <p class="testimonials__card--person-role">${role}</p>
                </div>
            </div>
        `;

        cardsContainer.appendChild(testimonialCard);
    });
};

export default renderTestimonials;