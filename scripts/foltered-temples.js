const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified

const hamButton = document.querySelector("#menu");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});