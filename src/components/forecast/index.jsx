import ForecastItem from "../forecast-item/index.jsx";
import { getForecastItemList } from '../../components/weather/utils.jsx';

export default function Forecast({weatherData}) {
    return (
    <div class="card-group">
        { getForecastItemList(weatherData?.daily).map((item) => <ForecastItem item={item}/>) }
    </div>
    )
}