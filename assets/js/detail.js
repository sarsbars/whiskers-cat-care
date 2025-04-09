"use strict";

const loginModal = document.getElementById('loginModal');
const loginTrigger = document.getElementById('loginTrigger');
const closeModal = document.querySelector('.close-modal');

loginTrigger.addEventListener('click', function () {
  loginModal.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  loginModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});
