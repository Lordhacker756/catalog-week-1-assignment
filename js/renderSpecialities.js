import aboutData from '../constants/about.json';

const renderSpecialities = () => {
    const [specialitiesSection] = document.getElementsByClassName('specialities');

    // Clear existing content
    specialitiesSection.innerHTML = '';

    // Render cards from data
    aboutData.about.forEach(({ name, description, path }) => {
        const card = document.createElement('div');
        card.classList.add('specialities__card');

        card.innerHTML = `
            <div class="specialities__card--icon">
                <img src="${path}" alt="${name}" />
            </div>
            <h3 class="specialities__card--title">${name}</h3>
            <p class="specialities__card--description">${description}</p>
        `;

        specialitiesSection.appendChild(card);
    });
};

export default renderSpecialities;