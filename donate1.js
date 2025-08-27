const submitBtn = document.getElementById('submitBtn');
const loadingAnimation = document.getElementById('loadingAnimation');

submitBtn.addEventListener('click', function() {
  submitBtn.style.display = 'none';
  loadingAnimation.style.display = 'block';

  
  setTimeout(function() {
    loadingAnimation.style.animation = 'spin 0s linear infinite'; 
    setTimeout(function() {
      loadingAnimation.style.display = 'none'; 
      submitBtn.style.display = 'block';
      alert('Your Form Is Sucessfully Submitted!');
    }, 1000);
  }, 2000); 
});
