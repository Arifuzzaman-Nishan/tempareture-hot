const key = "4f17891288de1ad1aa5d378232ca014e";


getId = (id) => {
    return document.getElementById(id);
}





getId("search-btn").addEventListener("click", () => {
    const city = getId("input-text").value;
    getId("city-name").innerText = city;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      )
        .then(res => res.json())
        .then(data => {
            const tempValue = data.main.temp;
            getId("temp-value").innerText = tempValue;

            const text = data.weather[0].description;
            getId("description").innerText = text;

            const icon = data.weather[0].icon;
            // getId("icon-id").innerText = ""

            console.log(data);
        })
})

