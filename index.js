// Sound Effects
const launchSound = new Audio('sounds/launch.mp3');
const hoverSound = new Audio('sounds/hover.mp3');
const clickSound = new Audio('sounds/click.mp3');

// Add hover sound effect to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => hoverSound.play());
});

// Launch Button Action with Visual Animation
document.getElementById('play-btn').addEventListener('click', () => {
    clickSound.play();
    launchSound.play();
    document.body.classList.add('launching');
    setTimeout(() => alert('🚀 Megumin Launcher Activated! Prepare for Eaglercraft!'), 1500);
});

// Redirect to Discord on Click
document.getElementById('discord-btn').addEventListener('click', () => {
    clickSound.play();
    setTimeout(() => window.open('https://discord.gg/ZtTEnSRDby', '_blank'), 500);
});

// Display Info with Fancy Alert
document.getElementById('info-btn').addEventListener('click', () => {
    clickSound.play();
    fancyAlert('⚡ Megumin Launcher: Unleash your full Eaglercraft potential!', 'info');
});

// Smooth Scroll to Sections (Optional Future Expansion)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fancy Alert with Animation
function fancyAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `alert ${type}`;
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // Fade out after 3 seconds
    setTimeout(() => {
        alertBox.classList.add('fade-out');
        alertBox.addEventListener('animationend', () => alertBox.remove());
    }, 3000);
}

// Background Particle Animation using JavaScript
createParticles();

function createParticles() {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(particle);
    }
}
