import data from '../constants/carousel.json';

const CAROUSEL_ITEM_COUNT = data.length;
let currIdx = 0;

const maxIdx = () => {
    if (window.innerWidth >= 1024) return 4; // Desktop
    if (window.innerWidth >= 768) return 3; // Tablet
    return 1; // Mobile
};

const loadAndRender = (carouselContainer) => {
    data.forEach(({ image, title, description: desc }) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel__item');

        carouselItem.innerHTML = `
            <img class="carousel__item-image" src="${image}" alt="${title}" />
            <h3 class="carousel__item-title">${title}</h3>
            <p class="carousel__item-description">${desc}</p>
        `;

        carouselContainer.appendChild(carouselItem);
    });
};

const scrollCarousel = (direction, carouselContainer, itemWidth, gap) => {
    itemWidth = parseFloat(itemWidth) + gap;

    const maxVisibleItems = maxIdx();
    const maxTranslateIdx = CAROUSEL_ITEM_COUNT - maxVisibleItems;

    if (direction === "forward" && currIdx < maxTranslateIdx) {
        currIdx++;
    } else if (direction === "back" && currIdx > 0) {
        currIdx--;
    }

    const translateValue = currIdx * itemWidth;
    carouselContainer.style.transform = `translateX(-${translateValue}px)`;
};

const initializeScroller = (carouselContainer) => {
    const [leftBtn] = document.getElementsByClassName('carousel__button--left');
    const [rightBtn] = document.getElementsByClassName('carousel__button--right');
    const [carouselItem] = document.getElementsByClassName('carousel__item');

    let itemWidth = carouselItem ? parseFloat(getComputedStyle(carouselItem).width) : 0;
    let gap = carouselItem ? parseFloat(getComputedStyle(carouselContainer).gap) || 0 : 0;

    leftBtn.addEventListener('click', () => scrollCarousel('back', carouselContainer, itemWidth, gap));
    rightBtn.addEventListener('click', () => scrollCarousel('forward', carouselContainer, itemWidth, gap));

    // Adjust itemWidth and gap on resize
    window.addEventListener('resize', () => {
        const [newCarouselItem] = document.getElementsByClassName('carousel__item');
        if (newCarouselItem) {
            itemWidth = parseFloat(getComputedStyle(newCarouselItem).width);
            gap = parseFloat(getComputedStyle(carouselContainer).gap) || 0;
        }
    });
};

const initCarousel = () => {
    const [carouselContainer] = document.getElementsByClassName('carousel__container');

    if (carouselContainer) {
        // Load carousel items
        loadAndRender(carouselContainer);

        // Initialize scrolling behavior
        initializeScroller(carouselContainer);
    }
};

export default initCarousel;
