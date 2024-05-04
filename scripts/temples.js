const year  = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastmodified')
lastModified.innerHTML = (document.lastModified);

const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});