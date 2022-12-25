function toggleMode() {
    const element = document.documentElement
    element.classList.toggle("light")

    const avatar = document.querySelector("#profile img")
    if(element.classList.contains("light")) {
        avatar.setAttribute('src', "./assets/img/avatar-light.png")
        avatar.setAttribute('alt', 'Foto de Diego sorrindo, usando uma camiseta preta e óculos.')
    } else {
        avatar.setAttribute('src', "./assets/img/avatar.png")
        avatar.setAttribute('alt', 'Foto de Diego sorrindo, usando uma camiseta preta.')
    }
}


