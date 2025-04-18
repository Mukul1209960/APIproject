import React, { useEffect, useState } from "react";

export default function Weather(){
    const[weather,setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=QWZNKupS7epIAs9zSnEQxvfBoluqdVMM')
        .then((data) => data.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error))
     },[]);
    console.log(weather);
    return (
        <div className="bg-violet-600 text-lg text-white p-5 gap-5">
        <p>Weather</p>
        {weather ? weather.timelines.daily[0].values.temperatureAvg > 20 ? "Sunny" : "Winter" :"Loading.." }
        <p>Temperature</p>
        {weather ? weather.timelines.daily[0].values.temperatureAvg : "Loading.."}
        <p>Humidity</p>
        {weather ? weather.timelines.daily[0].values.humidityAvg : "Loading.."}
        <p>Wind</p>
        {weather ? weather.timelines.daily[0].values.
windGustAvg : "Loading.."
}
        </div>
    )
}