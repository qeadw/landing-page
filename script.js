const games = {
    'project-infinity': {
        title: 'Project Infinity',
        icon: '&#8734;',
        status: 'In Progress, Taking Requests',
        description: 'An endless procedural adventure game where the world generates infinitely as you explore. Discover new terrains, collect resources, and see how far you can go in this ever-expanding universe.',
        url: 'https://project-infinity-one.vercel.app'
    },
    'boids': {
        title: 'Boids',
        icon: '&#9670;',
        status: 'In Progress, Taking Requests',
        description: 'A mesmerizing flocking simulation based on Craig Reynolds\' boids algorithm. Watch as hundreds of entities move together in beautiful, emergent patterns following simple rules of separation, alignment, and cohesion.',
        url: 'https://boids-pi.vercel.app'
    },
    'chopping-choppers': {
        title: 'Chopping Choppers',
        icon: '&#129683;',
        status: 'In Progress, Taking Requests',
        description: 'An action-packed helicopter combat game where you pilot your chopper through intense battles. Dodge enemy fire, collect power-ups, and take down waves of opponents in this fast-paced aerial shooter.',
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
