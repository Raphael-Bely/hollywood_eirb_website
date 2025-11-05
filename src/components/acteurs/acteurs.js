function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const numberOfSparkles = 150;

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3;
        
        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

createSparkles();



document.addEventListener('DOMContentLoaded', () => {
    const memberCards = document.querySelectorAll('.member-card');

    memberCards.forEach(card => {
        const memberPhoto = card.querySelector('.member-photo');
        
        const currentSrc = memberPhoto.src;
        const pathParts = currentSrc.split('/');
        const filename = pathParts[pathParts.length - 1];
        const directory = pathParts.slice(0, -1).join('/');
        const fileNameWithoutExt = filename.split('.')[0];
        const fileExtension = filename.split('.')[1];

        const alternativeFilename = fileNameWithoutExt.replace(/(\d*)$/, match => {
            return match === '1' ? '2' : '1';
        }) + '.' + fileExtension;
        
        const alternativePath = `${directory}/${alternativeFilename}`;

        memberPhoto.addEventListener('click', function() {
            // Désactiver les clics multiples
            this.style.pointerEvents = 'none';

            // Créer l'overlay de flash
            const createFlash = () => {
                const flashOverlay = document.createElement('div');
                flashOverlay.classList.add('flash-overlay');
                memberPhoto.parentElement.insertBefore(flashOverlay, memberPhoto.nextSibling);
                
                // Supprimer le flash après son animation
                setTimeout(() => {
                    flashOverlay.remove();
                }, 300);
            };

            // Premier flash et changement de photo
            createFlash();
            setTimeout(() => {
                // Vérifier si l'image alternative existe
                const img = new Image();
                img.src = alternativePath;
                img.onload = () => {
                    memberPhoto.src = alternativePath;
                };
                img.onerror = () => {
                    // Revenir à l'image originale si l'alternative n'existe pas
                    memberPhoto.src = currentSrc;
                }
            }, 150);

            // Après 2 secondes, retour à l'image originale
            setTimeout(() => {
                // Flash pour revenir à l'image originale
                createFlash();
                setTimeout(() => {
                    memberPhoto.src = currentSrc;
                    
                    // Réactiver les clics
                    setTimeout(() => {
                        this.style.pointerEvents = 'auto';
                    }, 300);
                }, 150);
            }, 2000);
        });
    });
});


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


document.addEventListener('DOMContentLoaded', () => {
    const toggleSecretBtn = document.getElementById('toggleSecretBtn');
    const secretSection = document.getElementById('secretSection');
    const bassemMember = document.getElementById('bassemMember');
    const papaMember = document.getElementById('papaMember');

    toggleSecretBtn.addEventListener('click', () => {
        if (secretSection.style.display === 'none') {
            secretSection.style.display = 'block';
            toggleSecretBtn.textContent = 'Masquer Sigma Supreme';
        } else {
            secretSection.style.display = 'none';
            toggleSecretBtn.textContent = 'Révéler Sigma Supreme';
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu burger
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".main-nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burger.classList.toggle("open");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function hideGameLinkOnMobile() {
        const gameLink = document.querySelector('.main-nav a[href="../jeu/jeu.html"]');
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
