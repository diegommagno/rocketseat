import { Router } from "./router.js"

// Mapeamento da rota para os arquivos
const router = new Router() // Instanciando a classe Router, não pode usar direto Router, precisa instanciar.
router.add("/", "pages/home.html")
router.add("/explorer/stage-06/spa-universe/", "/")
router.add("/explore", "/pages/explore.html")
router.add("/the-universe", "/pages/the-universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()

const home = document.querySelector("#home")
const universe = document.querySelector("#universe")
const explore = document.querySelector("#explore")

home.addEventListener("click", () => {
  home.classList.add("selected")
  universe.classList.remove("selected")
  explore.classList.remove("selected")
  updateSelectedPage()
  
})

universe.addEventListener("click", () => {
  home.classList.remove("selected")
  universe.classList.add("selected")
  explore.classList.remove("selected")
  updateSelectedPage()
})

explore.addEventListener("click", () => {
  home.classList.remove("selected")
  universe.classList.remove("selected")
  explore.classList.add("selected")
  updateSelectedPage()
})

const updateSelectedPage = () => {
  const body = document.querySelector("body")
  const page = window.location.pathname
  if (page === "/") {
    body.style.background = "url(./src/img/mountains-universe-1.png) no-repeat center center fixed"
    body.style.backgroundSize = "cover"
  }
  if (page === "/explore") {
    body.style.background = "url(./src/img/mountains-universe-3.png) no-repeat center center fixed"
    body.style.backgroundSize = "cover"
  }
  if (page === "/the-universe") {
    body.style.background = "url(./src/img/mountains-universe-2.png) no-repeat center center fixed"
    body.style.backgroundSize = "cover"
  }
}