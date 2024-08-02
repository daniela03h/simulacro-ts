import { CitiesController } from './cities.controller'
import { Card } from './card'
import { Spinner } from "./spinner";
import { IWeather } from '../model/IWeather';

const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;
const cardSetion = document.querySelector('#card-section') as HTMLDivElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;
const url = "http://localhost:3000/"

function guardian(){
    document.addEventListener("DOMContentLoaded", () => {
        if(!sessionStorage.getItem("token")){
            window.location.href = "/"
        }
    
    })
}

loaderContainer.append(Spinner());
window.addEventListener("DOMContentLoaded", () => {
    guardian()
    loaderContainer.style.display = "flex";
});

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.style.display = "none";
    }, 500)

})


logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})

async function showCities() {
    const citiesController = new CitiesController(url);
    const cities = await citiesController.getCities("cities");

    cities.forEach(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=72a10f6b113cf2410d49eed95618f60d`);
        const data: IWeather = await response.json();
        cardSetion?.append(Card(city, data.main.temp))
    })
}

showCities()