'use strict';

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const BTNCLOSEMODAL = document.querySelector('.close-modal');
const BTNSSHOWMODAL = document.querySelectorAll('.show-modal');

const showModal = function () {
  MODAL.classList.remove('hidden');
  OVERLAY.classList.remove('hidden');
};

const closeModal = function () {
  MODAL.classList.add('hidden');
  OVERLAY.classList.add('hidden');
};

for (let i = 0; i < BTNSSHOWMODAL.length; i++) {
  BTNSSHOWMODAL[i].addEventListener('click', showModal);
}

BTNCLOSEMODAL.addEventListener('click', closeModal);
OVERLAY.addEventListener('click', closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape" && !MODAL.classList.contains("hiddden")) {
        closeModal()
    }
})
