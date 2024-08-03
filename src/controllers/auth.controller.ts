import { ILogin } from "../model/ILogin";
import { IRegisterErrorResponse, IRegisterUser, IRegisterUserReponse } from "../model/IRegisterUser";


export class AuthController {
    url: string = 'http://190.147.64.47:5155/';
    tokenLog: string | undefined;

    constructor() {
    }


    async register(registerData: IRegisterUser) {
        try {
            const response = await fetch(`${this.url}api/v1/users`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(registerData)
            })
    
            if (response.status >= 400) {
                const error : IRegisterErrorResponse= await response.json()
                const errorMessage = error.message.join('\n')
                throw new Error(errorMessage)
            } 

            const responseRegister: IRegisterUserReponse = await response.json()
            if (responseRegister.message === "Success"){
                window.location.href = '/'
            }
        } catch(error: any) {
            alert(error.message)
        }

    }


    async login(data: ILogin, endPoint: string) {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.status != 200) {
            throw new Error("No se puede iniciar sesion")
        } 

        const responseLogin = await response.json()
        this.tokenLog = responseLogin.token
        return responseLogin
    }
}