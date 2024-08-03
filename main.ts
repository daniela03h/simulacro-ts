import { AuthController } from './src/controllers/auth.controller'

const loginForm = document.querySelector('#login-form') as HTMLFormElement
const emailUser = document.querySelector('#email-user') as HTMLInputElement
const passwordUser = document.querySelector('#password-user') as HTMLInputElement

const url = "https://reqres.in/api/"

loginForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault()

    const user = {
        email: emailUser.value,
        password: passwordUser.value,
    }

    try {

    const authController = new AuthController(url)
    const responseOfLogin = await authController.login(user, 'login')
    console.log(responseOfLogin.token);
    sessionStorage.setItem('token', responseOfLogin.token)

    const getToken = sessionStorage.getItem("token")

    if(getToken){
        window.location.href= "./src/views/home.html"
    }
} catch(e) {
    console.log(e);
}
})