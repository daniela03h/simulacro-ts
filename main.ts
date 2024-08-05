import { AuthController } from './src/controllers/auth.controller'

const loginForm = document.querySelector('#login-form') as HTMLFormElement
const emailUser = document.querySelector('#email-user') as HTMLInputElement
const passwordUser = document.querySelector('#password-user') as HTMLInputElement

const authController = new AuthController()

loginForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault()
    const user = {
        email: emailUser.value,
        password: passwordUser.value,
    }

    authController.login(user)
})