import { Spinner } from "./spinner";
import { renderCitiesCard } from "./renderCitiesCard";

const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;

function guardian() {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/"
    }
}

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

document.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.className.includes("viewMore-button")) {
        const idViewMore = target.getAttribute("id-button")
        localStorage.setItem("id-view", String(idViewMore))
        window.location.href = "../views/infoCity.html"
    }
})