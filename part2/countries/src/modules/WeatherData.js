import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherData = ({ country }) => {
    const api_key = process.env.REACT_APP_API_KEY;

    const [weatherData, setWeatherData] = useState({});
    console.log(api_key);
    //Get latitude of the country
    const coordinatesRequest = `https://api.openweathermap.org/geo/1.0/direct?q=${country.capitals[0]}&appid=${api_key}`;

    useEffect(() => {
        axios.get(coordinatesRequest).then((response) => {
            const location = response.data[0];
            const weatherRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${api_key}&units=metric`;
            axios.get(weatherRequest).then((response) => {
                console.log(response.data);
                setWeatherData(response.data);
                console.log("Response data set to state");
            });
        });
    }, []);

    const getWeatherImage = () => {
        const code = String(weatherData.weather[0].id);

        const timezoneUTCAddHours = weatherData.timezone / 3600;
        let dateTime = new Date();
        dateTime.setHours(dateTime.getHours() + timezoneUTCAddHours);
        const isDayTime =
            dateTime.getHours() >= 7 && dateTime.getHours() <= 20 ? true : false;

        let imageURL = "";

        if (code === "800") {
            //clear, sunny or nightime
            imageURL = isDayTime
                ? "http://openweathermap.org/img/wn/01d@2x.png"
                : "http://openweathermap.org/img/wn/01n@2x.png";
        } else {
            switch (code.charAt(0)) {
                case "6":
                    //snow
                    imageURL = "http://openweathermap.org/img/wn/13d@2x.png";
                    break;
                case "8":
                    //Clouds
                    imageURL = "http://openweathermap.org/img/wn/04d@2x.png";
                    break;
                case "5":
                    //Rain
                    imageURL = "http://openweathermap.org/img/wn/09d@2x.png";
                    break;
                case "3":
                    //Drizzle
                    imageURL = isDayTime
                        ? "http://openweathermap.org/img/wn/10d@2x.png"
                        : "http://openweathermap.org/img/wn/10n@2x.png";
                    break;
                case "2":
                    //Thunderstorm
                    imageURL = "http://openweathermap.org/img/wn/11d@2x.png";
                    break;
                default:
                    return <></>;
            }
        }
        return (
            <>
                <img src={imageURL} alt={weatherData.weather[0].main} />
                <p>{isDayTime ? "Day" : "Night"}</p>
            </>
        );
    };
    if (Object.keys(weatherData).length > 0) {
        return (
            <>
                <h1>Weather in {country.capitals[0]}</h1>
                <p>Temperature: {weatherData.main.temp} ºC </p>
                {getWeatherImage()}
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Wind: {weatherData.wind.speed} m/s </p>
            </>
        );
    } else {
        return <></>;
    }
};

export default WeatherData;