import { guardian } from "./guard";
import { CitiesController } from "./cities.controller"

const titleCity = document.querySelector('.card-title') as HTMLElement
const cardCountry = document.querySelector('.card-country') as HTMLParagraphElement
const cardDescription = document.querySelector('.card-description') as HTMLParagraphElement
const cardTemp= document.querySelector('.card-temp') as HTMLParagraphElement;
const cardImg = document.querySelector(".img-card") as HTMLImageElement;
const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;

const citiesController = new CitiesController("http://localhost:3000/")

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})


window.addEventListener("DOMContentLoaded", () => {
    guardian()
    renderCity()
});

export async function renderCity() {
    const city = await citiesController.getCity()
    titleCity.innerHTML = city.city
    cardCountry.innerHTML = city.country
    cardDescription.innerHTML = city.cityDescription
    cardTemp.innerHTML = `${String(((city?.temp ?? 0) - 273.15).toFixed(2))} C`
    cardImg.src = city.image
}

