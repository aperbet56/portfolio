// particlesJS
particlesJS("particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "push",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Récupération des éléments HTML5
const subtitle = document.querySelector(".info__text__subtitle");
const allServicesCards = document.querySelectorAll(".services__carousel__card");
const indicator = document.querySelector(".carousel__indicator");
const numberSlider = allServicesCards.length;
const footerCopyrightYear = document.querySelector(".footer__copyright__year");
const arrowBtn = document.querySelector(".arrow__btn");
const navigation = document.querySelector(".navigation");
const menuBurger = document.querySelector(".burger__btn");
const navLinks = document.querySelectorAll(".link");

new Typewriter(subtitle, {
  loop: true,
  deleteSpeed: 50,
})
  .changeDelay(50)
  .typeString("<strong> Développeuse web !</strong> ")
  .pauseFor(2000)
  .deleteChars(6)
  .typeString(`<span style="color:#b8c1ec"> Front-end !</span> `)
  .pauseFor(2000)
  .deleteChars(12)
  .typeString(`<span style="color:#ffc0ad"> Back-end !</span> `)
  .pauseFor(2000)
  .start();

// Création de la variable index et de la variable count
let index = 0;
let count = 1;

// Affichage dynamique du compteur dès l'arrivée sur la page web
indicator.textContent = `${count} / ${numberSlider}`;

// Déclaration de la fonction nextImage qui va permettre de passer à l'image suivante
const nextImage = () => {
  allServicesCards[index].classList.remove("active");

  if (index < numberSlider - 1) {
    index++;
    count++;
    indicator.textContent = `${count} / ${numberSlider}`;
  } else {
    index = 0;
    count = 1;
    indicator.textContent = `${count} / ${numberSlider}`;
  }
  allServicesCards[index].classList.add("active");
  //console.log(index);
};

//La méthode setInterval() appelle à plusieurs reprises la fonction nextImage avec un délai fixe entre chaque appel de 3s.
setInterval(nextImage, 3000);

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Déclaration de la fonction scroll qui va permettre de gérer le scroll
const scroll = () => {
  // La méthode Window.scrollTo() permet de faire défiler la fenêtre pour atteindre les coordonnées données dans le document.
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Le défilement se fait en douceur
  });
};

// Ecoute de l'événement "click" sur la flèche
arrowBtn.addEventListener("click", scroll);

// Déclaration de la fonction toggleNav qui va permettre l'affichage des liens de navigation
const toggleNav = () => {
  menuBurger.classList.toggle("active");
  navigation.classList.toggle("active");
};

// Ecoute de l'événement "click" sur le bouton menuBurger et appel de la fonction toggleNav
menuBurger.addEventListener("click", toggleNav);

navLinks.forEach((link) =>
  // Ecoute de l'événement click
  link.addEventListener("click", (e) => {
    // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
    e.stopPropagation();
    // Appel de la fonction toggleNav
    toggleNav();
  })
);

// Création de la constante threshold
const threshold = 0.1;

// Création de l'objet options qui va définir les options de mon intersectionObserver
const options = {
  root: null,
  rootMargin: "0px", // marges sur les 4 côtés de la zone d'affichage
  threshold,
};

// Déclaration de la fonction handleIntersect ayant comme paramètres entries et observer
const handleIntersect = (entries, observer) => {
  // Pour chaque entrée
  entries.forEach((entry) => {
    if (entry.intersectionRatio > threshold) {
      // Ajout de la classe reveal__visible à lorsque l'élément cible devient visible dans la page
      entry.target.classList.add("reveal__visible");
      // La méthode unobserve() de l'interface IntersectionObserver indique à l'objet IntersectionObserver courant de cesser d'observer l'élément cible spécifié.
      observer.unobserve(entry.target);
    }
  });
};

// Ecoute de l'événement "DOMContentLoaded" sur la fenêtre
window.addEventListener("DOMContentLoaded", () => {
  // Pour détecter quand l'élément rentre dans la zone d'affichage on peut se reposer sur l'API intersection observer.
  // Création d'un nouvel observateur en appelant le constructeur IntersectionObserver() en précisant une fonction callback à appeler quand l'intersection franchit l'un de des paliers, handleIntersect(), et mon ensemble d'options.
  const observer = new IntersectionObserver(handleIntersect, options);
  // Récupération de tous les éléments HTML5 ayant la classe reveal
  const targets = document.querySelectorAll(`[class*="reveal-"]`);
  // Pour chaque chaque élément ayant la classe reveal
  targets.forEach((target) => {
    // Surveiller l'évolution de la visibilité de l'intersection de plusieurs éléments par rapport au viewport en appelant observer.observe() pour chacun de ces éléments.
    observer.observe(target);
  });
});
