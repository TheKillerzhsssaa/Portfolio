// script.js
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }
  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    messageInput.focus();
    return;
  }
  alert('Form submitted successfully!');
  contactForm.reset();
});
