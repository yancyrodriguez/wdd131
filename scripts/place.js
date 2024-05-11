
const year = document.querySelector("#currentyear")
const today = new Date()
year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span>`;

let oLastModif = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${oLastModif}`;

const temp = 28
const wind = 5

const windChill = document.querySelector('#windChill')

function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed < 4.8) {
      
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill;
    } else {
        return "N/A";
    }
}

windChill.textContent = calculateWindChill(temp, wind)
