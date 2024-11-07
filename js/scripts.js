
const buttons = document.querySelectorAll('.card-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');

    card.classList.toggle('closed');

    const cardBody = card.querySelector('.card-body');

    if (card.classList.contains('closed')) {
      cardBody.style.display = 'none';
      this.textContent = 'Show Text';
    } else {
      cardBody.style.display = 'block';
      this.textContent = 'Hide Text';
    }
  });
});
