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

//La méthode setInterval() appelle à plusieurs reprises la fonction nextImage avec un délai fixe entre chaque appel de 4s.
setInterval(nextImage, 4000);

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
  .typeString(`<span style="color:#eebbc3"> Back-end !</span> `)
  .pauseFor(2000)
  .start();
