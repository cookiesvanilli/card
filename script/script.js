const placesList = document.querySelector(".places-list");

const cardContainer = document.createElement("div");
const cardImage = document.createElement("div");
const deleteButton = document.createElement("button");
const cardDescription = document.createElement("div");
const cardName = document.createElement("h3");
const btnCardLike = document.createElement("button");
const form = document.forms.new;
const popUpBtn = document.querySelector(".user-info__button");
const popUp = document.querySelector(".popup");
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Нургуш",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg",
  },
  {
    name: "Тулиновка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg",
  },
  {
    name: "Остров Желтухина",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg",
  },
  {
    name: "Владивосток",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg",
  },
];

function createCard() {
  cardContainer.classList.add("place-card");
  cardImage.classList.add("place-card__image");
  deleteButton.classList.add("place-card__delete-icon");
  cardDescription.classList.add("place-card__description");
  cardName.classList.add("place-card__name");
  btnCardLike.classList.add("place-card__like-icon");

  cardImage.appendChild(deleteButton);
  cardContainer.appendChild(cardImage);
  cardDescription.appendChild(cardName);
  cardDescription.appendChild(btnCardLike);
  cardContainer.appendChild(cardDescription);
}

function initialAddCards() {
  return placesList.append(cardContainer.cloneNode(true));
}

function addCardContent(a) {
  a.forEach((el) => {
    cardName.textContent = `${el.name}`;
    cardImage.style.backgroundImage = `url(${el.link})`;
    createCard();
    initialAddCards();
  });
}

addCardContent(initialCards);

function popUpToggle(e) {
  if (
    e.target.classList.contains("user-info__button") ||
    e.target.classList.contains("popup__close")
  ) {
    popUp.classList.toggle("popup_is-opened");
  }
}

function manualAddCards() {
  const name = form.name.value;
  const link = form.link.value;
  cardImage.style.backgroundImage = `url(${link})`;
  cardName.textContent = `${name}`;
  createCard();
  initialAddCards();
  popUp.classList.toggle("popup_is-opened");
}

popUp.addEventListener("submit", (e) => {
  e.preventDefault();
  manualAddCards();
  form.reset();
});

placesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("place-card__like-icon")) {
    e.target.classList.toggle("place-card__like-icon_liked");
  } else if (e.target.classList.contains("place-card__delete-icon")) {
    placesList.removeChild(e.target.parentElement.parentElement);
  }
});
popUp.addEventListener("click", popUpToggle);
popUpBtn.addEventListener("click", popUpToggle);
