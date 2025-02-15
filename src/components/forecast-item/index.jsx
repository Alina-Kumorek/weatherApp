import { getImg, getImgAlt } from '../../components/weather/utils.jsx';

export default function ForecastItem({item}) {
    return (
        <>
            <div className="card text-center" style={{width: "18rem"}}>
                <div className="card-header">{item?.day_name}</div>
                <img className="card-img-top p-3"
                    src={getImg(item?.weather_code)}
                    alt={getImgAlt(item?.weather_code)}/>
                <div className="card-body">
                    <h5 className="card-title">{item?.temperature_2m_max} °C</h5>
                    <h6 className="card-subtitle text-muted">{item?.temperature_2m_min} °C</h6>
                    <p className="card-text">💧 {item?.precipitation_probability_max} %</p>
                    <p className="card-text">{item?.precipitation_sum} mm</p>
                </div>
            </div>
        </>
    )
}