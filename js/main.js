import render from './renderTeamMembers'
import initCarousel from './carousel';
import renderSpecialities from './renderSpecialities';
import renderServices from './renderServices';

document.addEventListener('DOMContentLoaded', () => {
    render();
    renderSpecialities();
    renderServices();
    initCarousel();
});