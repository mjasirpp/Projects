const search_value = document.getElementById("search_value")
const searchButton = document.getElementById("searchButton")
const result = document.getElementById('result')

const search = async ()=>{
    let city = search_value.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
    if(response.status===200){
        const details = await response.json()
        console.log(details);

        let temperature = details.main.temp
        let humidity = details.main.humidity
        let wind = details.wind.speed        
        let weather = details.weather[0].description
        let icon = details.weather[0].icon

        result.innerHTML =`
            <div class="outputImage">
                <img src="https://openweathermap.org/img/wn/${icon}.png" class="card-img" alt="weather image">
            </div>

            <div class="weatherOuput">
                <h1 class="weatherOuputText">${temperature}<sup>oc</sup></h1>
            </div>

            <p class="weatherOuputResult">${weather}</p>

            <div class="outputResults">
                <p class="card-text"><span><i class="fa-sharp fa-solid fa-house-tsunami"></i></span><span id="humidityLevel">${humidity}%</span><br> Humidity</p>
                <p class="card-text"><span><i class="fa-sharp fa-solid fa-wind"></i></span><span id="humidityLevel">${wind} </span><br> Wind Speed</p>
            </div>
        `   
    }
}
