// Button click to change text and color
document.getElementById('colorBtn').addEventListener('click', function () {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "orange";
});

// Hover effect already in CSS

// Keypress detection
document.addEventListener('keypress', function (e) {
  alert(`You pressed: ${e.key}`);
});

// Double-click secret
document.getElementById('colorBtn').addEventListener('dblclick', function () {
  alert("🎉 You discovered the secret double-click!");
});

// Image gallery
const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150/ff0000",
  "https://via.placeholder.com/150/00ff00"
];
let index = 0;
document.getElementById('nextImg').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('gallery-img').src = images[index];
});

// Accordion toggle
document.querySelector('.accordion-toggle').addEventListener('click', () => {
  const content = document.querySelector('.accordion-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');

  const emailValid = /\S+@\S+\.\S+/.test(email.value);
  const passwordValid = password.value.length >= 8;

  if (!emailValid) {
    feedback.textContent = "Invalid email format.";
    feedback.className = "invalid";
    return;
  }

  if (!passwordValid) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.className = "invalid";
    return;
  }

  feedback.textContent = "Form is valid! ✅";
  feedback.className = "valid";
});

// Real-time password feedback
document.getElementById('password').addEventListener('input', function () {
  const feedback = document.getElementById('formFeedback');
  if (this.value.length >= 8) {
    feedback.textContent = "Password looks good.";
    feedback.className = "valid";
  } else {
    feedback.textContent = "Password too short.";
    feedback.className = "invalid";
  }
});
