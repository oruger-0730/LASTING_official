window.addEventListener('DOMContentLoaded', () => {
  const backButton = window.document.getElementById('back-button');
  if (backButton && window.history.length > 1) {
    backButton.style.display = 'block';
  }
});
