import servicesData from '../constants/services.json';

const renderServices = () => {
    const [servicesContainer] = document.getElementsByClassName('what_we_do__cards');

    // Clear existing content
    servicesContainer.innerHTML = '';

    // Create and append cards from data
    servicesData.services.forEach(({ name, description, path }) => {
        const card = document.createElement('div');
        card.classList.add('what_we_do__card');

        card.innerHTML = `
            <div class="what_we_do__card--icon">
                <img src="${path}" alt="${name}" />
            </div>
            <h3 class="what_we_do__card--title">${name}</h3>
            <p class="what_we_do__card--description">${description}</p>
        `;

        servicesContainer.appendChild(card);
    });
};

export default renderServices;