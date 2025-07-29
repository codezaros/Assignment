const texts = ["HTML", "CSS", "Front-End"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("changing-text");

function type() {
  const currentText = texts[textIndex];
  textElement.textContent = currentText.substring(0, charIndex);

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    delay = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

type();
