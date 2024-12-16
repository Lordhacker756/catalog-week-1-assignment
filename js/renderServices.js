import services from '../constants/services.json';

const render = async () => {
    const servicesContainer = document.getElementsByClassName('services__container')[0];

    services.forEach(({ name, cost, description }) => {
        // Create a new div element
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        // Set innerHTML of the new element
        serviceElement.innerHTML = `
            <h3 class="service__name">${name}</h3>
            <h4 class="service__cost">${cost}</h4>
            <p class="service__description">${description}</p>
        `;

        // Append the new element to the container
        servicesContainer.appendChild(serviceElement);
    });

};

export default render;