// Sélection des éléments
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

const h1 = document.querySelector('.hero-left h1');
const text = "MakeUI est une boutique innovante pour vos sites web !";

// Créer un élément pour contenir le texte généré
const heroText = document.createElement('h1');
heroText.className = 'hero-text';

// Ajouter l'élément à la page
h1.parentNode.insertBefore(heroText, h1.nextSibling);
h1.style.display = 'none';

// Fonction Typping effect
function textTyppingEffect(element, text, i = 0) {
    if (i === text.length - 1) {
        // Créer un élément span pour le mot "innovante" si il existe dans le texte
        if (text.includes('innovante')) {
            const index = text.indexOf('innovante');
            element.innerHTML = text.substring(0, index) + `<span class="important">${text.substring(index, index + 9)}</span>` + text.substring(index + 9);
        } else {
            element.textContent = text;
        }
        return
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
        return
    }
    setTimeout(() => textTyppingEffect(element, text, i + 1), 50);
}


document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les éléments à animer (les textes et images)
    const elementsToAnimate = document.querySelectorAll('.preview-text, .preview-image img');

    // Crée l'observateur avec un seuil de 50%
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe "animate" qui déclenche l'animation en CSS
                entry.target.classList.add('animate');
                // Stoppe l'observation de cet élément si l'animation ne doit se faire qu'une seule fois
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    // Observe chacun des éléments sélectionnés
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Ajouter la classe important pour le mot "important"
const style = document.createElement('style');
style.innerHTML = '.hero-text .important { color: var(--primary-300); }';
document.head.appendChild(style);

// Appel de la fonction textTyppingEffect
textTyppingEffect(heroText, text)

// Fonction pour toggle le menu
function toggleMenu() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Event listener pour le burger menu
burger.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

document.getElementById("hero-button").addEventListener("click", function () {
    const buttonText = this.querySelector(".button-text");
    const loader = this.querySelector(".loader");

    this.classList.add("clicked");
    buttonText.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        setTimeout(() => {
            buttonText.innerText = "DECOUVRIR";
            buttonText.style.display = "block";
            loader.style.display = "none";
            this.classList.remove("clicked");
        }, 1000);
    }, 300);
});


let currentSlide = 0;

function showSlide(slideIndex) {
    const offers = document.getElementById('offers');
    const totalSlides = offers.children.length;

    // Calcul de l'indice correct en cas de dépassement
    currentSlide = (slideIndex + totalSlides) % totalSlides;

    // Mise à jour de la position
    offers.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}