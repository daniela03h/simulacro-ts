import { ILogin, ILoginErrorReponse, ILoginReponse } from "../model/ILogin";
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
                const error: IRegisterErrorResponse = await response.json()
                const errorMessage = error.message.join('\n')
                throw new Error(errorMessage)
            }

            const responseRegister: IRegisterUserReponse = await response.json()
            if (responseRegister.message === "Success") {
                window.location.href = '/'
            }
        } catch (error: any) {
            alert(error.message)
        }

    }


    async login(credentials: ILogin) {
        try {
            const response = await fetch(`${this.url}api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(credentials)
            })

            if (response.status >= 400) {
                // alert("No se pudo iniciar sesion")
                const error: ILoginErrorReponse = await response.json()
                if (Array.isArray(error.message)) {
                    const errorMessage = error.message.join('\n')
                    throw new Error(errorMessage)
                }
                const errorMessage = error.message
                throw new Error(errorMessage)
            }

            const responseLogin : ILoginReponse = await response.json()
            sessionStorage.setItem('token', responseLogin.data.token)
            window.location.href = "src/views/home.html"
        
        } catch (error: any) {
            alert(error.message)
        }

    }
}