console.log("Привет от Pepexqw_! Удачи в кодинге :)");
console.log("( помощь с сайтом @minifirstoffc )");
function updateTime() {
    const now = new Date().toLocaleString("ru-RU", {
        timeZone: "Europe/Moscow",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("time").textContent = "Время: " + now;
}
setInterval(updateTime, 1000);
updateTime();

// Получение погоды через Open-Meteo API
fetch('https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current=temperature_2m,weathercode&timezone=Europe%2FMoscow')
    .then(res => res.json())
    .then(data => {
        const temp = data.current.temperature_2m;
        document.getElementById("weather").textContent = `Погода: ${temp}°C`;
    })
    .catch(err => {
        document.getElementById("weather").textContent = "Не удалось загрузить погоду 😢";
        console.error(err);
    });
