document.querySelectorAll('.card-button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const cardBody = card.querySelector('.card-body');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    cardBody.style.display = isExpanded ? 'none' : 'block';

    button.setAttribute('aria-expanded', !isExpanded);

    button.textContent = isExpanded ? 'Show Text' : 'Hide Text';

    if (isExpanded) {
      card.classList.add('closed');
    } else {
      card.classList.remove('closed');
    }
  });
});
