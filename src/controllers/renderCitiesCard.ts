import { CitiesController } from './cities.controller'
import { Card } from './card'
import { IWeather } from '../model/IWeather';

const url = "http://localhost:3000/"

const cardSection = document.querySelector('#card-section') as HTMLDivElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;

export async function renderCitiesCard() {
    console.log('renderCitiesCard')
    loaderContainer.style.display = "flex";
    cardSection.innerHTML = ''
    try {
        const citiesController = new CitiesController(url);
        const cities = await citiesController.getCities("cities");

        cities.forEach(async (city) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=72a10f6b113cf2410d49eed95618f60d`);
            const data: IWeather = await response.json();
            cardSection?.append(Card(city, data?.main?.temp))
        })
    } finally {
        loaderContainer.style.display = "none";
    }
}