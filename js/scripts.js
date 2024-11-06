cardgroup.document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        toggleText(card.id);
    });

});

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

/* Thank you Joe for taking my dust away about listener events... it's an important and simple thing I will have more present from now */

/* Add event listener for a click event for each card which will trigger the 'hide' and 'show' functionallity */




/*function toggleText(cardId) {
    const card = document.getElementById(cardId);
    const bodyText = card.querySelector('.body-text');
    const button = card.querySelector('button');

    bodyText.classList.toggle('show');
    card.classList.toggle('active');
    button.textContent = bodyText.classList.contains('show') ? 'Hide text' : 'Show text';
}

document.querySelectorAll('.body-text').forEach(text => {
    text.classList.remove('show');
}); */ 