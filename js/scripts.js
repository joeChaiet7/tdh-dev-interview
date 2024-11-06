// Get the .card__button attributes
const buttons = document.querySelectorAll('.card__button')

// Loop the .card__button array and add a listener to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {

        // Save the id to know what element was clicked
        const buttonId = event.target.id

        // Split the id and get the number
        const buttonIdNumber = buttonId.split('--')[1]
        
        // Match the id selected with the description id
        let description = document.getElementById(`card__description--${buttonIdNumber}`)

        // If the description id exist..
        if (description) {
            description.classList.toggle('hidden');

            // Update aria-hidden based on the visibility of the description
            const isDescriptionHidden = description.classList.contains('hidden');
            description.setAttribute('aria-hidden', isDescriptionHidden ? 'true' : 'false');

            // Update button text depending on visibility of the description
            event.target.textContent = description.classList.contains('hidden') ? "Show Text" : "Hide Text";
        } else {
            console.log('this description id doesnt exist')
        }
    })
})


