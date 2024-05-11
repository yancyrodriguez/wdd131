// insert the year
// add a point in the currentyear 'id'
const year = document.querySelector("#currentyear")
// adding the date
const today = new Date()
// insert the text in HTML
year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span>`;

let oLastModif = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${oLastModif}`;

const temp = 18
const wind = 5

const windChill = document.querySelector('#windChill')

function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature is below 10°C and the wind speed is less than 4.8 m/s
    if (temperature <= 10 && windSpeed < 4.8) {
        // Formula to calculate wind chill
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill;
    } else {
        return "N/A";
    }
}

windChill.textContent = calculateWindChill(temp, wind)
