import services from '../constants/teams.json';

const render = async () => {
    const [servicesContainer] = document.getElementsByClassName('services__container');

    services.forEach(({ name, role, description, path }) => {
        // Create a new div element
        const teamMember = document.createElement('div');
        teamMember.classList.add('our_team__member');

        // Set innerHTML of the new element
        teamMember.innerHTML = `
            <h3 class="service__name">${name}</h3>
            <h4 class="service__cost">${role}</h4>
            <p class="service__description">${description}</p>
        `;

        // Append the new element to the container
        servicesContainer.appendChild(teamMember);
    });

};

export default render;