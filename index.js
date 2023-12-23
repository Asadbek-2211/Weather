const form = document.getElementById("form");
const input = document.getElementById("input");
const deg = document.getElementById("deg");
const name = document.getElementById("name");
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
let info = null;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  info = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=33dedde6287575d237be2e1c44271762`
    )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
  if (info) {
    deg.innerHTML = "Temperature: " + info.main.temp + `°С`;
    name.innerHTML += "Country: " + info.name
    humidity.innerHTML += "Wet: " + info.main.humidity +  `%`
    wind.innerHTML += "Wind speed" + info.wind.speed + `km/h`
    wind.innerHTML += "deg: " + info.wind.deg 
  } else {
    deg.innerHTML = "Not found!";
    name.innerHTML = "Not found!";
    humidity.innerHTML = "Not found!";
    wind.innerHTML = "Not found!";
  }
});
