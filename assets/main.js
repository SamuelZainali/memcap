const cookiesModal = document.getElementById("cookies-modal");
let isMenuOpen = false;

const toggleHMenu = () => {
  const hMenu = document.getElementById("h-menu");
  const hMenuBtn = document.getElementById("h-menu-toggler");

  if (isMenuOpen) {
    hMenu.style.right = "-100%";
    hMenuBtn.classList.remove("-rotate-90");
    isMenuOpen = false;
  } else {
    hMenu.style.right = 0;
    hMenuBtn.classList.add("-rotate-90");
    isMenuOpen = true;
  }
};

const openToggleButton = () => {
  cookiesModal.style.display = "flex";
};

const closeToggleButton = () => {
  cookiesModal.style.display = "none";
};

const acceptCookies = () => {
  closeToggleButton();
};

const rejectCookies = () => {
  closeToggleButton();
};
