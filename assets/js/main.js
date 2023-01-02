
// Remonte en haut de page
const smoothAccueil = document.getElementById("navAccueil");

smoothAccueil.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Va vers la section aPropos
const smoothAPropos = document.getElementById("navAPropos");
const targetAPropos = document.getElementById("aPropos");

smoothAPropos.addEventListener("click", function () {
  window.scrollTo({
    top: targetAPropos.offsetTop,
    behavior: 'smooth'
  });
});

// va vers la section ouvrage
const smoothOuvrages = document.getElementById("navOuvrages");
const targetOuvrages = document.getElementById("ouvrages");

smoothOuvrages.addEventListener("click", function () {
  window.scrollTo({
    top: targetOuvrages.offsetTop,
    behavior: 'smooth'
  });
});

// retourne top pour telephone
const smoothTop = document.getElementById("smoothTop");
smoothTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// smooth contact 

const navContact = document.getElementById("navContact");
navContact.addEventListener("click", function () {
  window.scrollTo({
    top: 10000,
    behavior: 'smooth'
  });
});