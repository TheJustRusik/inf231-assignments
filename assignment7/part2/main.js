const res = document.getElementById("weather")
const button = document.getElementById("button")

let lon;
let lat;

function initialize(){
    navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude
        lat = position.coords.latitude
    })
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude
      lat = position.coords.latitude
    })
    console.log(lat + " " + lon)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=78be1b6495bf41c49f7e25c944f7300b`)        
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
        return response.json(); // Преобразование ответа в JSON
      })
      .then(data => {
        // Извлекаем значение "main" и отображаем его
        const weatherMain = data.weather[0].main;
        res.textContent = `Текущая погода: ${weatherMain}`;
      })
      .catch(error => {
        res.textContent = 'Произошла ошибка: ' + error.message;
      });
})



initialize()