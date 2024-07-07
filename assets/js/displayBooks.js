function displayABook(livre) {
  const book = document.createElement("div");
  book.classList.add("book");

  // Correctly create and set the title element
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  const titleBook = document.createElement("h4");
  titleBook.innerText = livre.title;
  titleContainer.append(titleBook);
  if (livre.subtitle) {
    const subtitleBook = document.createElement("h4");
    subtitleBook.innerText = livre.subtitle;
    titleContainer.append(subtitleBook);
  }
  book.append(titleContainer);
  const imageBook = document.createElement("img");
  imageBook.src = livre.image;
  imageBook.alt = "couverture livre " + livre.title;
  book.append(imageBook);
  const descriptionBook = document.createElement("p");
  descriptionBook.innerText = livre.description;
  book.append(descriptionBook);
  const containerLiensAchat = document.createElement("div");
  containerLiensAchat.classList.add("liensAchat");
  const titleLiensAchat = document.createElement("h5");
  titleLiensAchat.innerText = "Plus d'information sur :";
  containerLiensAchat.append(titleLiensAchat);
  const containerLiens = document.createElement("div");
  containerLiens.classList.add("containerLiens");
  for (const [vendor, link] of Object.entries(livre.purchaseLinks)) {
    const lienAchat = document.createElement("a");
    lienAchat.href = link;
    lienAchat.innerText = vendor.charAt(0).toUpperCase() + vendor.slice(1);
    containerLiens.append(lienAchat);
  }
  containerLiensAchat.append(containerLiens);
  book.append(containerLiensAchat);
  return book;
}

const ouvrages = document.getElementById("ouvrages");
const oldBooks = document.createElement("div");
oldBooks.classList.add("oldBooks");

function displayAllBooks() {
  const ouvrages = document.getElementById("ouvrages");
  const valeursLivres = Object.values(books);
  valeursLivres.forEach((livre, index) => {
    const bookElement = displayABook(livre);
    if (index < 2) {
      bookElement.classList.add("dernierLivre");
      ouvrages.append(bookElement);
    } else {
      oldBooks.append(bookElement);
    }
    /*  ouvrages.append(bookElement); */
  });
  ouvrages.append(oldBooks);
}
displayAllBooks();
linksOfProfileAuthor();
function linksOfProfileAuthor() {
  const liensAchat = document.createElement("h4");
  liensAchat.classList.add("liensAuthor");
  liensAchat.innerHTML = `Retrouver tous les ouvrages de l'auteur sur
    <a href="https://www.edilivre.com/?s=&amp;a=Dani%C3%ABl+Vigne" target="_blank">Edilivre.com</a>
    et sur <a href="https://www.lysbleueditions.com/catalogue/?_recherche_par_titre_auteur=daniel+vigne">Le lys bleu</a>
    ou partout dans le monde sur Amazon et la Fnac.`;
  ouvrages.append(liensAchat);
}
