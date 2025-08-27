const form = documentgetElementById('signup-form');

form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let errorMessage = "";

  if (name === "") {
    errorMessage += "Please enter your full name. \n";
  }

  if (email === "") {
    errorMessage += "Please enter your email address. \n";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMessage += "Please enter a valid email address. \n";
  }

  if (password === "") {
    errorMessage += "Please enter a password. \n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    event.preventDefault(); // Prevent form submission
  } else {
    // Simulate form submission (replace with actual backend interaction)
    const successMessage = document.querySelector('.success-message');
    successMessage.hidden = false;
    form.reset(); // Clear form after successful submission
  }
});
