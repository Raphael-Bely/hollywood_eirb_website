 // Création du ciel étoilé
 function createStarrySky() {
 const sky = document.querySelector('.starry-sky');
 const numberOfStars = 200;

 for (let i = 0; i < numberOfStars; i++) {
 const star = document.createElement('div');
 star.className = 'star';
 
 // Position aléatoire
 const x = Math.random() * 100;
 const y = Math.random() * 100;
 
 // Taille aléatoire
 const size = Math.random() * 2;
 
 star.style.left = `${x}%`;
 star.style.top = `${y}%`;
 star.style.width = `${size}px`;
 star.style.height = `${size}px`;
 
 // Délai d'animation aléatoire
 star.style.animationDelay = `${Math.random() * 2}s`;
 
 sky.appendChild(star);
 }
 }

 createStarrySky();


    // Script pour la rotation du logo

    document.addEventListener('DOMContentLoaded', function() {

        const logo = document.querySelector('.logo-3d');

        let isRotating = false;


        logo.addEventListener('click', function() {

            if (isRotating) {

                this.classList.remove('rotating');

            } else {

                this.classList.add('rotating');

            }

            isRotating = !isRotating;

        });

    });

    // Fonction pour créer une étoile filante
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Position aléatoire en haut de l'écran
        const startX = Math.random() * window.innerWidth;
        star.style.left = startX + 'px';
        star.style.top = '0px';
        
        document.body.appendChild(star);
        
        // Supprime l'étoile après l'animation
        setTimeout(() => {
            star.remove();
        }, 1500);
    }

    // Fonction pour créer des étoiles filantes aléatoirement
    function randomShootingStars() {
        // Crée une étoile filante
        createShootingStar();
        
        // Programme la prochaine étoile filante
        const delay = Math.random() * 3000 + 2000; // Entre 2 et 5 secondes
        setTimeout(randomShootingStars, delay);
    }

    // Démarre les étoiles filantes après le chargement de la page
    document.addEventListener('DOMContentLoaded', function() {
        // Démarre les étoiles filantes avec un délai initial
        setTimeout(randomShootingStars, 2000);
    });


    //scroll button
    document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scroll-button');
    const scrollThreshold = 100; // Seuil de défilement pour changer la direction
    let isAtBottom = false;

    function updateArrowDirection() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calcul si on est plus proche du bas ou du haut
        isAtBottom = scrollTop + windowHeight > documentHeight - scrollThreshold;
        
        if (isAtBottom) {
            scrollButton.classList.remove('pointing-down');
        } else {
            scrollButton.classList.add('pointing-down');
        }
    }

    // Mise à jour initiale
    updateArrowDirection();

    // Mise à jour lors du défilement
    window.addEventListener('scroll', updateArrowDirection);

    // Gestion du clic
    scrollButton.addEventListener('click', function() {
        if (isAtBottom) {
            // Scroll vers le haut
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll vers le bas
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
});



function makeFullCircleFirework(container) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    container.appendChild(firework);

    // Position aléatoire
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;

    // Créer les particules
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        // Angle et distance pour chaque particule
        const angle = (i / 50) * Math.PI * 2;
        const radius = Math.random() * 100 + 50;
        
        particle.style.setProperty('--angle', `${angle}rad`);
        particle.style.setProperty('--radius', `${radius}px`);
        
        firework.appendChild(particle);
    }

    // Supprimer le feu d'artifice après l'animation
    setTimeout(() => {
        firework.remove();
    }, 2000);
}

function triggerFireworks() {
    const container = document.body;
    
    // Créer plusieurs feux d'artifice
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            makeFullCircleFirework(container);
        }, i * 500);
    }
}

// Déclenchement des feux d'artifice à des moments spécifiques
document.addEventListener('DOMContentLoaded', () => {
    // Exemple : feux d'artifice au chargement de la page
    setTimeout(triggerFireworks, 2000);

    // Exemple : feux d'artifice au clic sur le logo
    const logo = document.querySelector('.logo-3d');
    logo.addEventListener('click', triggerFireworks);

    // Exemple : feux d'artifice au scroll en bas de page
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            triggerFireworks();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Trouver le paragraphe contenant "Feu d'artifice"
    const fireworkText = Array.from(document.querySelectorAll('.text-content'))
        .find(el => el.textContent.includes('Feu d\'artifice') && !el.textContent.includes('PPPPS'));
    
        if (fireworkText) {
        // Rendre le texte cliquable
        fireworkText.style.cursor = 'pointer';
        //fireworkText.style.color = 'var(--primary-pink)'; // Optionnel : mettre en évidence
        fireworkText.style.textDecoration = 'underline'; // Optionnel : souligner

        fireworkText.addEventListener('click', (e) => {
            // Créer plusieurs feux d'artifice
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight;
                    
                    const firework = document.createElement('div');
                    firework.classList.add('firework');
                    document.body.appendChild(firework);

                    // Position du feu d'artifice
                    firework.style.left = `${x}px`;
                    firework.style.top = `${y}px`;

                    // Palette de couleurs vibrantes
                    const colors = [
                        'rgba(255, 0, 0, 1)',     // Rouge vif
                        'rgba(0, 255, 0, 1)',     // Vert vif
                        'rgba(0, 0, 255, 1)',     // Bleu vif
                        'rgba(255, 105, 180, 1)', // Rose Hollywood
                        'rgba(255, 255, 0, 1)',   // Jaune
                        'rgba(255, 165, 0, 1)',   // Orange
                        'rgba(138, 43, 226, 1)'   // Violet
                    ];

                    // Créer les particules
                    for (let j = 0; j < 100; j++) {
                        const particle = document.createElement('div');
                        particle.classList.add('firework-particle');
                        
                        // Angle et distance pour chaque particule
                        const angle = (j / 100) * Math.PI * 2;
                        const radius = Math.random() * 150 + 100;
                        
                        // Couleur aléatoire
                        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        
                        particle.style.setProperty('--angle', `${angle}rad`);
                        particle.style.setProperty('--radius', `${radius}px`);
                        
                        firework.appendChild(particle);
                    }

                    // Supprimer le feu d'artifice après l'animation
                    setTimeout(() => {
                        firework.remove();
                    }, 2000);
                }, i * 500);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".main-nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burger.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Vérifie si l'écran est en mode mobile (moins de 768px de large)
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Désactiver les étoiles filantes sur mobile
    if (!isMobile()) {
        setTimeout(randomShootingStars, 2000);
    }

    // Désactiver les feux d'artifice automatiques sur mobile
    if (!isMobile()) {
        setTimeout(triggerFireworks, 2000);

        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                triggerFireworks();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    function hideGameLinkOnMobile() {
        const gameLink = document.querySelector('.main-nav a[href="./jeu/jeu.html"]');
        if (window.innerWidth <= 768) {
            if (gameLink) gameLink.style.display = "none";
        } else {
            if (gameLink) gameLink.style.display = "inline-block";
        }
    }

    // Exécuter au chargement
    hideGameLinkOnMobile();

    // Vérifier lors du redimensionnement
    window.addEventListener("resize", hideGameLinkOnMobile);
});
