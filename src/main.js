// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var tagline = document.querySelector('.tagline');
var priceTag = document.querySelector('.price-tag');
var randomCoverButton = document.querySelector('.random-cover-button');
var form = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewCover = document.querySelector('.make-new-button');
var savedView = document.querySelector('.saved-view');
var coverSection = document.querySelector('.saved-covers-section');
var mainCover = document.querySelector('.main-cover');
var makeMyBook = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var firstDescriptorInput = document.querySelector('#descriptor1');
var secondDescriptorInput = document.querySelector('#descriptor2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', newCoverButton);
makeNewCover.addEventListener('click', changeToForm);
viewSavedButton.addEventListener('click', changeToSaveCovers);
homeButton.addEventListener('click', changeToHome);
makeMyBook.addEventListener('click', makeBook);
saveCoverButton.addEventListener('click', saveCover);
savedView.addEventListener('dblclick', removeCover);

// Create your event handlers and other functions here 👇
function changeToForm() {
  mainCover.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  savedView.classList.add('hidden');
  form.classList.remove('hidden');
  homeButton.classList.remove('hidden');
}

function changeToSaveCovers() {
  coverSection.innerHTML = null;
  mainCover.classList.add('hidden');
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  form.classList.add('hidden');
  savedView.classList.remove('hidden');
  for (var i = 0; i < savedCovers.length; i++) {
      coverSection.innerHTML += `<section class="mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="overlay" src="./assets/overlay.png">
      </section>`;
  }
}

function changeToHome() {
  mainCover.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden')
  randomCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  form.classList.add('hidden');
  savedView.classList.add('hidden')
}

function newCoverButton() {
  currentCover = new Cover(coverImg.src, title.innerText, tagline1.innerText, tagline2.innerText);
  currentCover.cover = covers[getRandomIndex(covers)];
  currentCover.title = titles[getRandomIndex(titles)];
  currentCover.tagline1 = descriptors[getRandomIndex(descriptors)];
  currentCover.tagline2 = descriptors[getRandomIndex(descriptors)];
  coverImg.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function makeBook(event) {
  event.preventDefault();
  var newBook = new Cover(coverInput.value, titleInput.value, firstDescriptorInput.value, secondDescriptorInput.value);
  savedCovers.push(newBook);
  coverImg.src = newBook.cover;
  title.innerText = newBook.title;
  tagline1.innerText = newBook.tagline1;
  tagline2.innerText = newBook.tagline2;
  changeToHome();
  coverInput.value = null;
  titleInput.value = null;
  firstDescriptorInput.value = null;
  secondDescriptorInput.value = null;
}

function saveCover() {
  if (savedCovers.indexOf(currentCover) === -1) {
      savedCovers.push(currentCover);
  }
}

function removeCover() {
  savedCovers.splice(savedCovers.indexOf(event.currentTarget), 1);
  coverSection.innerHTML = null;
  for (var i = 0; i < savedCovers.length; i++) {
      coverSection.innerHTML += `<section class="mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="overlay" src="./assets/overlay.png">
      </section>`;
  }
}


//change loading page
coverImg.src = covers[getRandomIndex(covers)];
title.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];


// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
