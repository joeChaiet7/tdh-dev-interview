function toggleText(cardId) {
    const card = document.getElementById(cardId);
    const bodyText = card.querySelector('.body-text');
    const button = card.querySelector('button');

    bodyText.classList.toggle('show');
    card.classList.toggle('active');
    button.textContent = bodyText.classList.contains('show') ? 'Hide text' : 'Show text';
}

document.querySelectorAll('.body-text').forEach(text => {
    text.classList.remove('show');
});