import { AuthController } from "./auth.controller"
import { guardianAuth } from "./guard";

const registerForm = document.querySelector(".register-form") as HTMLFormElement

const authController = new AuthController()

window.addEventListener("DOMContentLoaded", () => {
    guardianAuth()
});

registerForm.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    const formData = new FormData(registerForm)
    const registerData = {
        name: (formData.get('name')) as string,
        lastName: (formData.get('lastName')) as string,
        email: (formData.get('email')) as string,
        password: (formData.get('password')) as string,
    }
    
    authController.register(registerData)
})