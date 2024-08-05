export function guardian() {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/"
    }
}

export function guardianAuth() {
    if (sessionStorage.getItem("token")) {
        window.location.href = "/src/views/home.html"
    }
}
