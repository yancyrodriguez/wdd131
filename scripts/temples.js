// Current year

function updateFooter() {
    const currentYear = new Date().getFullYear(); // Obtener el año actual
    const lastModified = document.lastModified; // Obtener la última fecha de modificación
    
    //  span
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;
}

// Llamar a la función al cargar la página
window.onload = updateFooter;
//hamButton

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});