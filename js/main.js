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
