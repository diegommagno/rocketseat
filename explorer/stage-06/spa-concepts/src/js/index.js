import { Router } from "./router.js"

// Mapeamento da rota para os arquivos
const router = new Router()
router.add("/", "pages/home.html")
router.add("/explorer/stage-06/", "/")
router.add("/about", "pages/about.html")
router.add("/contact", "pages/contact.html")
router.add(404, "pages/404.html")

// Antigo
//  const routes = {
//   "/explorer/stage-06/": "/explorer/stage-06/pages/home.html",
//   "/about": "/explorer/stage-06/pages/about.html",
//   "/contact": "/explorer/stage-06/pages/contact.html",
//   404: "/explorer/stage-06/pages/404.html",
// }

router.handle() // Executa a função handle() quando a página é carregada, exibindo as informações de Home

window.onpopstate = () => router.handle() // Executa a função handle() quando o usuário clica no botão de voltar do navegador.

window.route = () => router.route() // Expondo a função route() para o navegador, para que o a do href consiga chamá-la imediatamente.

