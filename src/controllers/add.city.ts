import { ICity } from "../model/ICity";
import { CitiesController } from "./cities.controller";

const form = document.querySelector("form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country = document.querySelector("#new-country") as HTMLInputElement;
const image = document.querySelector("#new-img") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;
const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement
// const cityArray: ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]"); // con local storage
const url = 'http://localhost:3000/';
const citiesController = new CitiesController(url);

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newCity: ICity = {
        city: city.value,
        country: country.value,
        image: image.value,
        date: new Date(),
        cityDescription: cityDescription.value
    }

    try {
        const cityAdded = await citiesController.postCities("cities", newCity);
        alert("Se agrego ciudad");
        form.reset();
        window.location.href = "../views/home.html";
        console.log(cityAdded);

    } catch (e) {
        console.log(e);
    }
})