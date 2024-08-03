import { AuthController } from "./auth.controller"

const registerForm = document.querySelector(".register-form") as HTMLFormElement

const authController = new AuthController()

registerForm.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    const formData = new FormData(registerForm)
    authController.register({
        name: (formData.get('name')) as string,
        lastName: (formData.get('lastName')) as string,
        email: (formData.get('email')) as string,
        password: (formData.get('password')) as string,
    })
})