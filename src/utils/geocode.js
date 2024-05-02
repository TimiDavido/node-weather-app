const apiKey = "7a0adc2ca8b27ea4e2527cb6f5638354"

 fetchWeather = async (cityName) => {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        const response = await fetch(url);
        const data = await response.json()
        const {name, main, coord} = data

        // console.log("City name : " + name)
        // console.log(`The current temperature in ${name} is ${main.temp} °C`)
        // console.log(`The latitude is ${coord.lat}`)
        // console.log(`The longitude is ${coord.lon}`)

        return {
            cityName : name,
            temperature : main.temp,
            latitude : coord.lat,
            longitude : coord.lon
        }
   
    }
    catch(e){
        return {
            error: "Couldn't find location, Please try another search"}

    }
}

module.exports = fetchWeather;



