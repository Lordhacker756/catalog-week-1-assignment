import initCarousel from './carousel';
import renderSpecialities from './renderSpecialities';
import renderServices from './renderServices';
import { initMenu } from './initMobileMenu';
import initTestimonialCarousel from './initTestimonials';

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initTestimonialCarousel();
    renderSpecialities();
    renderServices();
    initCarousel();
});