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

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scroll-button');
    const scrollThreshold = 100;
    let isAtBottom = false;

    function updateArrowDirection() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        isAtBottom = scrollTop + windowHeight > documentHeight - scrollThreshold;
        
        if (isAtBottom) {
            scrollButton.classList.remove('pointing-down');
        } else {
            scrollButton.classList.add('pointing-down');
        }
    }

    updateArrowDirection();
    window.addEventListener('scroll', updateArrowDirection);

    scrollButton.addEventListener('click', function() {
        if (isAtBottom) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
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