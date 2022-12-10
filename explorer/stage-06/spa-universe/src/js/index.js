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