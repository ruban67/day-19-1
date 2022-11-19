//655ab0ec702c9c962474f067f04467d4
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeather(){
    var cityName= document.getElementById('cityName').value
    console.log(cityName)
    
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=655ab0ec702c9c962474f067f04467d4`)
    let result = await data.json()
    console.log(result)
    
    var weather = document.getElementById('weather')
    weather.innerHTML=`<div class="card" style="width: 20rem;">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://media.istockphoto.com/photos/weather-forecast-on-a-digital-display-7-day-dashboard-3d-illustration-picture-id1176320050"  class="img-fluid rounded-start" style="height:150px" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">weather report of ${cityName}</h5>
          <p class="card-text">temparature:${result.main.temp}</p>
          <p class="card-text">wind deg:${result.wind.deg}</p>
          <p class="card-text">humidity:${result.main.humidity}</p>
        </div>
      </div>
    </div>
  </div>
    </div>`
    }
    getWeather();