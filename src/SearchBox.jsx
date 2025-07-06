import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="09e72cf0b4d631ab14e95688bab47448";

    let getWeatherInfo = async ()=>{
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRespone = await response.json();
        let result ={
            city:city,
            temp : jsonRespone.main.temp,
            tempMin : jsonRespone.main.temp_min,
            tempMax : jsonRespone.main.temp_max,
            humidity : jsonRespone.main.humidity,
            feelsLike : jsonRespone.main.feels_like,
            weather : jsonRespone.weather[0].description,
        };
        console.log(result);
        return result;
    } catch(error){
       throw(error)
    }
    }

    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        }catch(error){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error &&<p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}