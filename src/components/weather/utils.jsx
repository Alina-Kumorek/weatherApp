import sunImg from "../../assets/weather/sun.png"
import moonImg from "../../assets/weather/night.png"
import cloudyDayImg from "../../assets/weather/cloudy-day.png"
import cloudyNightImg from "../../assets/weather/cloudy-night.png"
import cloudyImg from "../../assets/weather/cloud.png"
import fogImg from "../../assets/weather/foggy.png"
import hazeImg from "../../assets/weather/haze.png"
import rainImg from "../../assets/weather/rain.png"
import snowImg from "../../assets/weather/snow.png"
import thunderImg from "../../assets/weather/lightning-bolt-.png"
import otherImg from "../../assets/weather/vortex.png"

const sunny = [0];
const partCloudy = [1, 2];
const cloudy = [3];
const foggy = [45, 48];
const rainy = [51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82];
const snowy = [71, 73, 75, 77, 85, 86];
const stormy = [95, 96, 99];

export function getLat(city) {
      if (city == "war") {
          return "52.2298";
      } else if (city == "kra") {
          return "50.0614";
      } else if (city == "wro") {
          return "51.1";
      } else if (city == "lod") {
          return "51.7706";
      } else if (city == "poz") {
          return "52.4069";
      } else if (city == "gda") {
          return "54.3523";
      } else if (city == "szc") {
          return "53.4289";
      } else if (city == "lub") {
          return "51.25";
      } else if (city == "byd") {
          return "53.1235";
      } else if (city == "bia") {
          return "53.1333";
      } else if (city == "kat") {
          return "50.2584";
      } else if (city == "cze") {
          return "50.7965";
      } else if (city == "rze") {
          return "50.0413";
      } else if (city == "tor") {
          return "53.0138";
      } else if (city == "kie") {
          return "50.8703";
      } else if (city == "zak") {
          return "49.299";
      } else {
          return "52";
      }
  }

export function getLon(city) {
    if (city == "war") {
        return "21.0118";
    } else if (city == "kra") {
        return "19.9366";
    } else if (city == "wro") {
        return "17.0333";
    } else if (city == "lod") {
        return "19.4739";
    } else if (city == "poz") {
        return "16.9299";
    } else if (city == "gda") {
        return "18.6491";
    } else if (city == "szc") {
        return "14.553";
    } else if (city == "lub") {
        return "22.5667";
    } else if (city == "byd") {
        return "18.0076";
    } else if (city == "bia") {
        return "23.1643";
    } else if (city == "kat") {
        return "19.0275";
    } else if (city == "cze") {
        return "19.1241";
    } else if (city == "rze") {
        return "21.999";
    } else if (city == "tor") {
        return "18.5981";
    } else if (city == "kie") {
        return "20.6275";
    } else if (city == "zak") {
        return "19.9489";
    } else {
        return "20";
    }
}

export function getImg(code, isDay) {
    if (sunny.includes(code)) {
        return isDay ? sunImg : moonImg;
    } else if (partCloudy.includes(code)) {
        return isDay ? cloudyDayImg : cloudyNightImg;
    } else if (cloudy.includes(code)) {
        return cloudyImg;
    } else if (foggy.includes(code)) {
        return isDay ? fogImg : hazeImg;
    } else if (rainy.includes(code)) {
        return rainImg;
    } else if (snowy.includes(code)) {
        return snowImg;
    } else if (stormy.includes(code)) {
        return thunderImg;
    } else {
        return otherImg;
    }
}

export function getImgAlt(code, isDay = 1) {
    if (sunny.includes(code)) {
        return isDay ? "Słońce" : "Księżyc";
    } else if (partCloudy.includes(code)) {
        return isDay ? "Słońce i chmury" : "Księżyc i chmury";
    } else if (cloudy.includes(code)) {
        return "Chmury";
    } else if (foggy.includes(code)) {
        return isDay ? "Słońce i mgła" : "Księżyc i mgła";
    } else if (rainy.includes(code)) {
        return "Deszcz";
    } else if (snowy.includes(code)) {
        return "Śnieg";
    } else if (stormy.includes(code)) {
        return "Burza";
    } else {
        return "Coś innego";
    }
}

export function getForecastItemList(dailyData) {
    const dayNames = ["Dzisiaj", "Jutro", "Pojutrze"];

    console.log(dailyData);

    var forecastItemList = [];

    for (let i = 0; i < 7; i++) {
        const newItem = {};
        var dayName = "";

        newItem.weather_code = dailyData?.weather_code[i];
        newItem.temperature_2m_max = dailyData?.temperature_2m_max[i];
        newItem.temperature_2m_min = dailyData?.temperature_2m_min[i];
        newItem.precipitation_sum = dailyData?.precipitation_sum[i];
        newItem.precipitation_probability_max = dailyData?.precipitation_probability_max[i];

        if (i < dayNames.length) {
            dayName = dayNames[i];
        } else {
            dayName = dailyData?.time[i].slice(-5);
        }

        newItem.day_name = dayName;

        forecastItemList.push(newItem);
    }

    return forecastItemList;
}