const achievementsModal = document.querySelector(".achievements-modal");
const achievementsModalOpen = document.querySelector(
  ".achievements-modal-open"
);
const achievementsModalClose = document.querySelector(
  ".achievements-modal-card-header-close"
);

achievementsModalOpen.addEventListener("click", () => {
  achievementsModal.classList.add("modal-show");
  bloquearScroll();
});

achievementsModalClose.addEventListener("click", () => {
  achievementsModal.classList.remove("modal-show");
  desbloquearScroll();
});

function bloquearScroll() {
  document.body.style.overflow = "hidden";
}

function desbloquearScroll() {
  document.body.style.overflow = "auto";
}

const footerMessageClose = document.querySelector(".footer-message-close-button");
const footerMessage = document.querySelector(".footer-message");

footerMessageClose.addEventListener("click", () => {
  footerMessage.classList.add("footer-message-close");
});
