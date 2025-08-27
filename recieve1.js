const submitBtn = document.getElementById('submitBtn');
const loadingAnimation = document.getElementById('loadingAnimation');

submitBtn.addEventListener('click', function() {
  submitBtn.style.display = 'none';
  loadingAnimation.style.display = 'block';

  // Rotate the circle for 2 seconds
  setTimeout(function() {
    loadingAnimation.style.animation = 'spin 0s linear infinite'; // Stop the rotation
    setTimeout(function() {
      loadingAnimation.style.display = 'none'; // Hide the circle
      submitBtn.style.display = 'block';
      alert('Your Form Is Sucessfully Submitted!');
    }, 1000); // 1000 milliseconds = 1 second
  }, 2000); // 2000 milliseconds = 2 seconds
});
