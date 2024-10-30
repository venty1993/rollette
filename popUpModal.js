function makePopUpModal() {
  const popModal = document.querySelector(".pop-modal");
  const popModalBox = document.querySelector(".pop-modal-box");
  const popModalText = document.querySelector(".pop-modal-text");
  let isPop = false;

  // popModal.addEventListener("click", fastClose);

  function popUpModal(text) {
    popModalText.innerText = text;
    view(50);
    setTimeout(() => {
      hide(300);
    }, 250);
  }

  function view(time) {
    popModal.style.transition = `${time}ms`;
    popModal.style.opacity = "1";
    popModal.style.zIndex = "200";
  }
  function hide(time) {
    popModal.style.transition = `${time}ms`;
    popModal.style.opacity = "0";
    setTimeout(() => {
      popModal.style.zIndex = "-1";
    }, time);
  }

  return popUpModal;
}

const popUpModal = makePopUpModal();
