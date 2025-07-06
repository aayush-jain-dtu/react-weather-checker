import SearchBox from "./SearchBox";
import InfoBox from "./infobox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        city:"Wonderland",
        feelslike: 24.84,
        temp:25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity: 47,
        weather:"haze",
    })

    let updateInfo = (newinfo)=>{
      setweatherInfo(newinfo);
    }
    
    return (<div style={{textAlign:"center"}}>
        <h2>Weather App by Aayush</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}