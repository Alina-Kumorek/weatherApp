import { getImg, getImgAlt } from '../../components/weather/utils.jsx';

export default function Current({weatherData}) {
    const lightColor = "white";
    const darkColor = "#42323f";

    return (
        <div className="card text-center" style={{
            width: "18rem",
            backgroundColor: (weatherData?.current?.is_day ? lightColor : darkColor),
            color: (weatherData?.current?.is_day ? "black" : "white")
            }}>
            <img className="card-img-top p-3"
                src={getImg(weatherData?.current?.weather_code, weatherData?.current?.is_day)}
                alt={getImgAlt(weatherData?.current?.weather_code, weatherData?.current?.is_day)}/>
            <div className="card-body">
                <h5 className="card-title">{weatherData?.current?.temperature_2m} °C</h5>
                <p className="card-text">💧 {weatherData?.current?.precipitation} mm</p>
            </div>
        </div>
        )
}