const games = {
    'project-infinity': {
        title: 'Project Infinity',
        icon: '&#8734;',
        status: 'In Progress, Taking Requests',
        description: 'An alchemy crafting game where you combine elements to discover new ones. Start with water, fire, earth, and wind, then experiment to unlock hundreds of combinations. Build machines to automate production and research new discoveries.',
        url: 'https://project-infinity.qeadw.fun'
    },
    'boids': {
        title: 'Boids',
        icon: '&#9670;',
        status: 'In Progress, Taking Requests',
        description: 'A living ecosystem simulation featuring evolving creatures with genetic mutations. Watch boids flock together, evade predators, and develop traits like camouflage, speed, and even the ability to fight back. Features day/night cycles, shelters, and natural selection.',
        url: 'https://boids.qeadw.fun'
    },
    'chopping-choppers': {
        title: 'Chopping Choppers',
        icon: '&#129683;',
        status: 'In Progress, Taking Requests',
        description: 'An idle tree chopping game set in a procedural forest. Chop trees, sell wood, and hire workers to automate your lumber empire. Upgrade your axe, speed, and capacity while discovering rare tree types from common pines to legendary magic trees.',
        url: 'https://chopping-choppers.qeadw.fun'
    },
    'gravity-golf': {
        title: 'Gravity Golf',
        icon: '&#9898;',
        status: 'In Progress, Taking Requests',
        description: 'A unique twist on golf where gravity is your friend and foe. Navigate your ball through space-themed courses with planetary gravity wells, black holes, and orbital mechanics. Physics-based fun!',
        url: 'https://gravity-golf.qeadw.fun'
    },
    'plant-life': {
        title: 'Plant Life',
        icon: '&#127793;',
        status: 'In Progress, Taking Requests',
        description: 'A Progress Knight-style idle game where you play as a magical plant. Grow from a seedling to an ancient tree across multiple life cycles. Absorb water, photosynthesize, and channel essence while unlocking new abilities. Rebirth to gain permanent multipliers!',
        url: 'https://plant-life.qeadw.fun'
    },
    'rank-roller': {
        title: 'Rank Roller',
        icon: '&#127922;',
        status: 'In Progress, Taking Requests',
        description: 'A gacha-style rolling game where you collect rare ranks. Roll the dice, upgrade your luck, points, and speed multipliers, and work toward filling your 100-rank catalogue. How rare can you go?',
        url: 'https://rank-roller.qeadw.fun'
    },
    'combo-surge': {
        title: 'Combo Surge',
        icon: '&#9889;',
        status: 'In Progress, Taking Requests',
        description: 'A neon rhythm game where you build combos to unlock levels and earn upgrades. Keep the streak alive, hit the beats, and surge through increasingly challenging stages.',
        url: 'https://combo-surge.qeadw.fun'
    },
    'mage-battle': {
        title: 'Mage Battle',
        icon: '&#9876;',
        status: 'Multiplayer',
        description: 'A real-time multiplayer arena battle game! Cast magic missiles, dash through enemies, and unleash fireballs in isometric combat. Fight other players, track your kills and deaths, and compete on the leaderboard. WASD to move, SPACE to punch, CLICK to cast spells!',
        url: 'https://multiplayer-test.averyopela1.workers.dev'
    },
    'requests': {
        title: 'Feature Requests',
        icon: '&#9997;',
        status: 'In Progress, Taking Requests',
        description: 'Have an idea for a new game or feature? Submit your requests here! Vote on other suggestions and help shape what gets built next. Your feedback drives development.',
        url: 'https://requests-page.qeadw.fun'
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

// Secret Easter Egg
const secretTrigger = document.getElementById('secret-trigger');
const secretImage = document.getElementById('secret-image');
let secretVisible = false;

if (secretTrigger && secretImage) {
    secretTrigger.addEventListener('click', (e) => {
        e.stopPropagation();

        if (secretVisible) {
            secretImage.style.display = 'none';
            secretVisible = false;
            return;
        }

        // Position in top right, small and out of the way
        secretImage.style.right = '10px';
        secretImage.style.top = '10px';
        secretImage.style.left = 'auto';
        secretImage.style.maxWidth = '200px';
        secretImage.style.maxHeight = '200px';
        secretImage.style.display = 'block';
        secretVisible = true;
    });

    // Hide on click anywhere
    document.addEventListener('click', (e) => {
        if (secretVisible && e.target !== secretTrigger) {
            secretImage.style.display = 'none';
            secretVisible = false;
        }
    });
}
