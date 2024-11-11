function showText(button) {
    
    const cardBox = button.parentElement
    const text = cardBox.querySelector(".text");
    
    text.classList.toggle("active")
    cardBox.classList.toggle("active")
    button.innerText = text.classList.contains("active") ? "Hide text" : "Show text";
}