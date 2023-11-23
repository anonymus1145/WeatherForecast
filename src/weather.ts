function weather() {
    return {
        temp_c: 0,
        temp_f: 0,
        region: '',
        country: '',
        date: new Date(),
       }
}

async function getWeather(city: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=613ea2e1e83f470587d155741232311&q=${city}&aqi=yes`
  );
  const data = await response.json();
  
  const weatherObj = weather();
  weatherObj.temp_c = data.current.temp_c;
  weatherObj.temp_f = data.current.temp_f;
  weatherObj.region = data.location.region;
  weatherObj.country = data.location.country;
  weatherObj.date = data.current.last_updated;
}

function createForm () {

}