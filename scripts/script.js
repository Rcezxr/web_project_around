const buttonInfo = document.getElementById("button-info");
const popup = document.getElementById("popup");
const openPopup = document.getElementById("popup_opened");

buttonInfo.addEventListener("click", () => {
  const nome = document.getElementById("profile-name");
  const info = document.getElementById("profile-info");

  document.getElementById("profile-name").placeholder = nome;
  document.getElementById("profile-info").placeholder = info;
  popup.classList.add("popup_opened");
});
closePopup.addEventListener("click", () => {
  popup.classList.remove("popup_opnened");
});
