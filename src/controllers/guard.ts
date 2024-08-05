export function guardian() {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/"
    }
}