import { ICity } from "../model/ICity";

export class CitiesController {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getCities(endPoint: string): Promise<ICity[]> {
        const response = await fetch(`${this.url}${endPoint}`);
        const data = await response.json();


        return data
    }

    async postCities(endPoint: string, dataCity: ICity) {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(dataCity)
        });

        const data = response.json();
        if (response.status != 201) {
            throw new Error("No se puede publicar ciudad");
        }

        return data
    }

    async deleteCity(endPoint: string, idCity: string | number | undefined) {
        if (idCity === undefined){
            return
        }
        const response = await fetch(`${this.url}${endPoint}/${idCity}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            },
        });

        if (response.status !== 200) {
            throw new Error("No se puede eliminar");
        }
        
        const data = await response.json();
        return data
    }
}
