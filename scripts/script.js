const editButton = document.getElementById("profile__button-info");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const submit = document.getElementById("submit");

const inputName = document.getElementById("name-input");
const inputAbout = document.getElementById("about-input");

const profileName = document.getElementById("profile-name");
const profileInfo = document.getElementById("profile-info");

editButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileInfo.textContent;
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
