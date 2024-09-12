const typedText = document.querySelector(".hero-text h1");
const words = ["Hello", "Welcome 😊"];
let wordIndex = 0;
let letterIndex = 0;
let typingSpeed = 150;  // Speed of typing each letter
let deletingSpeed = 100;  // Speed of deleting each letter
let pauseDuration = 2000;  // Pause after completing each word

function typeWord() {
    if (letterIndex < words[wordIndex].length) {
        // Typing letters
        typedText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        // Pause before deleting
        setTimeout(deleteWord, pauseDuration);
    }
}

function deleteWord() {
    if (letterIndex > 0) {
        // Deleting letters
        typedText.textContent = typedText.textContent.slice(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteWord, deletingSpeed);
    } else {
        // Move to the next word
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWord();
});


