import { ICity } from "../model/ICity";

export class CitiesController{
    url:string;

    constructor(url:string){
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

        console.log(response.status);

        const data = response.json();
        if (response.status != 201) {
            throw new Error("No se puede publicar ciudad");
        }

        return data

    }
}
