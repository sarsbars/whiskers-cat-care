'use strict';
import * as utils from "./utils.js";

export function contactFormValidation() {
  const form = utils.select('.contact-form');
  const nameInput = utils.select('.name');
  const emailInput = utils.select('.email');
  const messageInput = utils.select('.message');
  const errorMessageArea = utils.select('.errorMessageArea');

  utils.listen('submit', form, function(event) { 
    let isValid = true;
    const errors = [];

    if (nameInput.value.trim() === '') {
      errors.push('Name is required.');
      isValid = false;
    }

    if (emailInput.value.trim() === '') {
      errors.push('Email is required.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      errors.push('Please enter a valid email address.');
      isValid = false;
    }

    if (messageInput.value.trim() === '') {
      errors.push('Message is required.');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();

      const errorMessage = errors.join('<br>');

      errorMessageArea.innerHTML = errorMessage;
      errorMessageArea.style.display = 'block';
    } else {
      errorMessageArea.style.display = 'none';
      errorMessageArea.innerHTML = '';
      console.log('Form submitted successfully!');
      
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}