
// Remonte en haut de page
const smoothAccueil = document.querySelector("#navAccueil");

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