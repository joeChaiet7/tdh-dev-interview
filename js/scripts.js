function showText(button) {
    
    const cardBox = button.parentElement
    const text = cardBox.querySelector(".text");
    
    text.style.display = text.style.display === "none" ? "block" : "none";
    button.innerText = text.style.display === "none" ? "Show text" : "Hide text";
    cardBox.style.backgroundColor = text.style.display === "none" ? "white" : "aliceblue";
    
}