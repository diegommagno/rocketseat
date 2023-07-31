
function togglePassword() {
    const password = document.querySelector("#password");
    password.type === "password" ? (password.type = "text") : (password.type = "password")

    document.querySelectorAll(".eye").forEach((eye) => {
        eye.classList.toggle("hide")
    }
)};

