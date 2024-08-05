import { CitiesController } from "./cities.controller";
import { guardian } from "./guard";

const form = document.querySelector(".form-edit-city") as HTMLFormElement;
const cityInput = document.querySelector("#new-city") as HTMLInputElement;
const countryInput = document.querySelector("#new-country") as HTMLInputElement;
const image = document.querySelector("#new-img") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;
const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;

const citiesController = new CitiesController("http://localhost:3000/")

window.addEventListener("DOMContentLoaded", () => {
    guardian()
    fillForm()
    form.addEventListener("submit", save)
});

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})


async function fillForm() {
    const city = await citiesController.getCity()
    cityInput.value = city.city
    countryInput.value = city.country
    image.value = city.image
    cityDescription.value = city.cityDescription
}

async function save(event:Event){
    event.preventDefault()
    await citiesController.updateCity({
        city: cityInput.value,
        country: countryInput.value,
        image: image.value,
        cityDescription: cityDescription.value,
        date: new Date(),
    })
    window.location.href = '../views/home.html'

}