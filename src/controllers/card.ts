import { ICity } from "../model/ICity";
import '../scss/card.scss'

export const Card = (props: ICity, temperature: number): HTMLElement => {
    let { id, city, country, image, cityDescription } = props;
    const cardContainer = document.createElement("article") as HTMLElement;
    cardContainer.className = "card-container";

    const img = document.createElement("img") as HTMLImageElement;
    img.className = "img-card";

    const infoContainer = document.createElement("div") as HTMLElement;
    infoContainer.className = "cardInfo-container";

    const cardTitle = document.createElement("h4") as HTMLHeadElement;
    cardTitle.className = "card-title"
    const cardCountry = document.createElement("p") as HTMLParagraphElement;
    const cardDescription = document.createElement("p") as HTMLParagraphElement;

    const temp = document.createElement("p") as HTMLElement;
    temp.innerText = `${String((temperature - 273.15).toFixed(2))} C` ;

    img.src = image;
    cardTitle.innerText = city;
    cardCountry.innerText = country;
    cardDescription.innerText = cityDescription;

    const crossContainer = document.createElement("span");
    crossContainer.className = "cross-container";
    crossContainer.innerHTML = `<i product-id = ${id} class="bi bi-x-circle-fill"></i>`
   
    infoContainer.append(cardTitle, cardCountry, cardDescription, temp);

    cardContainer.append(img, infoContainer, crossContainer);

    return cardContainer;
}