import { ICity } from "../model/ICity";
import { IWeather } from "../model/IWeather";

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

    async getCity() {
        const idCity = localStorage.getItem("id-view")
        const response = await fetch(`${this.url}cities/${idCity}`);
        const data = await response.json();
        const responseTemp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=72a10f6b113cf2410d49eed95618f60d`);
        const dataTemp: IWeather = await responseTemp.json();
        data.temp = dataTemp?.main?.temp

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
        if (idCity === undefined) {
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

    async updateCity(dataCity: ICity) {
        try {
            const idCity = localStorage.getItem("id-view")
            const response = await fetch(`${this.url}cities/${idCity}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(dataCity)
            });

            if (response.status >= 400) {
                throw new Error("No se puede actualizar");
            }

            const data = await response.json();
            return data
        } catch (error: any) {
            alert(error.message)
        }
    }
}