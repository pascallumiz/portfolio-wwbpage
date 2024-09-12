const typedText = document.querySelector(".hero-text h1");
const words = ["Hello", "Welcome 😊"];
let wordIndex = 0;
let letterIndex = 0;
let typingSpeed = 150;  
let deletingSpeed = 100;  
let pauseDuration = 2000; 

function typeWord() {
    if (letterIndex < words[wordIndex].length) {
        // Typing letters
        typedText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {

        setTimeout(deleteWord, pauseDuration);
    }
}

function deleteWord() {
    if (letterIndex > 0) {
    
        typedText.textContent = typedText.textContent.slice(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteWord, deletingSpeed);
    } else {
    
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWord();
});


