const editButton = document.getElementById("profile__button-info");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const submit = document.getElementById("submit");

const inputName = document.getElementById("name-input");
const inputAbout = document.getElementById("about-input");

const profileName = document.getElementById("profile-name");
const profileInfo = document.getElementById("profile-info");

editButton.addEventListener("click", () => {
  console.log(profileName.textContent);
  inputName.value = profileName.textContent.trim();
  inputAbout.value = profileInfo.textContent.trim();
  popup.classList.add("open");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("open");
});

submit.addEventListener("click", function (event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileInfo.textContent = inputAbout.value;

  popup.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const cardLikes = document.querySelectorAll(".card__like");

  cardLikes.forEach((button, index) => {
    const img = button.querySelector("img");

    const normal = "images/elements/Group.png";
    const likedSrc = "images/elements/blacklike.png";

    img.dataset.normal = normal;
    img.dataset.liked = likedSrc;

    let liked = img.src.endsWith(likedSrc);

    button.addEventListener("click", (e) => {
      liked = !liked;
      img.src = liked ? likedSrc : normal;
    });
  });
});
