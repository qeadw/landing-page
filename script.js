const games = {
    'project-infinity': {
        title: 'Project Infinity',
        icon: '&#8734;',
        status: 'In Progress, Taking Requests',
        description: 'An alchemy crafting game where you combine elements to discover new ones. Start with water, fire, earth, and wind, then experiment to unlock hundreds of combinations. Build machines to automate production and research new discoveries.',
        url: 'https://project-infinity-one.vercel.app'
    },
    'boids': {
        title: 'Boids',
        icon: '&#9670;',
        status: 'In Progress, Taking Requests',
        description: 'A living ecosystem simulation featuring evolving creatures with genetic mutations. Watch boids flock together, evade predators, and develop traits like camouflage, speed, and even the ability to fight back. Features day/night cycles, shelters, and natural selection.',
        url: 'https://boids-pi.vercel.app'
    },
    'chopping-choppers': {
        title: 'Chopping Choppers',
        icon: '&#129683;',
        status: 'In Progress, Taking Requests',
        description: 'An idle tree chopping game set in a procedural forest. Chop trees, sell wood, and hire workers to automate your lumber empire. Upgrade your axe, speed, and capacity while discovering rare tree types from common pines to legendary magic trees.',
        url: 'https://chopping-choppers.vercel.app'
    },
    'gravity-golf': {
        title: 'Gravity Golf',
        icon: '&#9898;',
        status: 'In Progress, Taking Requests',
        description: 'A unique twist on golf where gravity is your friend and foe. Navigate your ball through space-themed courses with planetary gravity wells, black holes, and orbital mechanics. Physics-based fun!',
        url: 'https://gravity-golf.vercel.app'
    },
    'requests': {
        title: 'Feature Requests',
        icon: '&#9997;',
        status: 'In Progress, Taking Requests',
        description: 'Have an idea for a new game or feature? Submit your requests here! Vote on other suggestions and help shape what gets built next. Your feedback drives development.',
        url: 'https://requests-page.vercel.app'
    }
};

// DOM Elements
const gameCards = document.querySelectorAll('.game-card');
const modal = document.getElementById('game-modal');
const closeModal = document.getElementById('close-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalStatus = document.getElementById('modal-status');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

// Open modal with game info
function openModal(gameId) {
    const game = games[gameId];
    if (!game) return;

    modalIcon.innerHTML = game.icon;
    modalIcon.style.color = getComputedStyle(document.querySelector(`[data-game="${gameId}"] .game-icon`)).color;
    modalTitle.textContent = game.title;
    modalStatus.textContent = game.status;
    modalDescription.textContent = game.description;
    modalLink.href = game.url;

    modal.classList.remove('hidden');
}

// Close modal
function closeModalFn() {
    modal.classList.add('hidden');
}

// Event listeners
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.dataset.game);
    });
});

closeModal.addEventListener('click', closeModalFn);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFn();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalFn();
});
