let loadingClick = 0
let movableClick = 0

function loading(event) {
  if(loadingClick == 0) {
    const button = event.currentTarget
    button.classList.add('loading')
    const text = button.textContent
    button.innerHTML = `<img src="./assets/img/loading.svg" alt=""> ${text}`
    loadingClick++
  } else if (loadingClick == 1) {
    const button = event.currentTarget
    button.classList.remove('loading')
    const text = button.textContent
    button.innerHTML = `${text}`
    loadingClick--
  }
}

function movable(event) {
  if(movableClick == 0) {
    const button = event.currentTarget
    button.classList.add('movable')
    const text = button.textContent
    button.innerHTML = `<img src="./assets/img/movable.svg" alt=""> ${text}`
    movableClick++
  } else if (movableClick == 1) {
    const button = event.currentTarget
    button.classList.remove('movable')
    const text = button.textContent
    button.innerHTML = `${text}`
    movableClick--
  }
}