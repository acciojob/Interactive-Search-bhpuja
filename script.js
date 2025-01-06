//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const searchDiv = document.querySelector('.search');
  const input = document.querySelector('.input');
  const button = document.querySelector('.btn');

  button.addEventListener('click', () => {
    searchDiv.classList.add('active');
    input.focus();
  });
});
