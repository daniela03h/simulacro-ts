import { ILogin } from "../model/ILogin";


export class PageController{
    url:string;
    tokenLog: string | undefined;

    constructor(url:string){
        this.url = url
    }

    async login(data:ILogin, endPoint:string){
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })

        if(response.status != 200) {
            throw new Error("No se puede iniciar sesion")
        }else {
            
        }

        const responseLogin = await response.json()
        this.tokenLog = responseLogin.token
        return responseLogin

    }
}