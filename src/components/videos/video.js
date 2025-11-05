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