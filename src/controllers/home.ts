const logoutButton = document.querySelector("#logout-button")

function guardian(){
    document.addEventListener("DOMContentLoaded", () => {
        if(!sessionStorage.getItem("token")){
            window.location.href = "/"
        }
    
    })
}
guardian()

// document.addEventListener("DOMContentLoaded", () => {
//     if(!sessionStorage.getItem("token")){
//         window.location.href = "/"
//     }

// })

logoutButton?.addEventListener("click", () => {
    console.log("hola");
    
    sessionStorage.removeItem("token")
    window.location.href = "/"
})