import { useEffect, useState } from "react";

import Location from "../location";
import Forecast from "../forecast/index.jsx";
import Current from "../current/index.jsx";

import { getLat, getLon} from './utils.jsx';

export default function Weather() {
    const [location, setLocation] = useState("");
    let [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    let [activeCheck, setActiveCheck] = useState(1);

    async function fetchWeatherData(loc) {
        setLoading = true;

        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${getLat(loc)}&longitude=${getLon(loc)}&current=temperature_2m,is_day,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&timezone=Europe%2FBerlin`
            );

            const data = await response.json();

            if (data) {
                setWeatherData(data);
                setLoading = false;
            }

            console.log(data);

        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchWeatherData("");
    }, [])

    function handleLocation() {
        fetchWeatherData(location);
    }

    return (
        <>
        <Location
            location={location}
            setLocation={setLocation}
            handleLocation={handleLocation}
        />

        {/* Nawigacja */}
        <div className="rounded p-3 m-3" style={{backgroundColor: "rgba(139, 158, 188, 0.7)"}}>
            <div className="d-flex justify-content-center">
            <div className="btn-group">
            <div className="btn-group">
                <button type="button"
                    className={"btn btn-primary mx-3" + (activeCheck === 1 ? " active" : "")}
                    style={{width: 200}}
                    onClick={() => setActiveCheck(1)}
                    >
                    Teraz
                </button>
            </div>
            <div className="btn-group">
                <button type="button"
                    className={"btn btn-primary mx-3" + (activeCheck === 0 ? " active" : "")}
                    style={{width: 200}}
                    onClick={() => setActiveCheck(0)}
                    >
                    Prognoza
                </button>
            </div>
            </div>
            </div>
        </div>

        {/* Pogoda */}
        <div className="rounded p-3 m-3" style={{backgroundColor: "rgba(104, 146, 184, 0.7)"}}>
        <div className="d-flex justify-content-center">
            {
            loading ? (<p>Loading...</p>) :
                (
                    activeCheck ? (<Current weatherData={weatherData}/>) : (<Forecast weatherData={weatherData}/>)
                )
            }
        </div>
        </div>
        </>
    )
}