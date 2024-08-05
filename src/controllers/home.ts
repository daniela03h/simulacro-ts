import { Spinner } from "./spinner";
import { renderCitiesCard } from "./renderCitiesCard";
import { guardian } from "./guard";

const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;


loaderContainer.append(Spinner());

window.addEventListener("DOMContentLoaded", () => {
    guardian()
    loaderContainer.style.display = "flex";
    renderCitiesCard()
});

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})

