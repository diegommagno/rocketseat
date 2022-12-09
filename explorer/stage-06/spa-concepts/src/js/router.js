export class Router {
  // Forma de biscoito, colocar aqui o que quero que meus biscoitos instânciados tenham.

  routes = {} // Object literal. Não precisa inciar com let ou const, functions também.

  add(routeName, page){
    // Mapeamento da rota para os arquivos
    this.routes[routeName] = page // this.routes é o objeto que está dentro da classe Router. Cria o objeto aqui, passa uma propriedade routeName e um valor page.
  }

  route(event) { // Não precisa colocar function. 
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle() // Para referenciar algo dentro da classe, usa-se this, como no object literal usa o nome do object.
  }

  handle() {
    const { pathname } = window.location
    console.log(window.location.pathname)
    const route = this.routes[pathname] || this.routes[404] // Se não encontrar a rota, retorna a página 404
    console.log(route)
  
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector("#app").innerHTML = html
      })
  }
}

// export default new Router() // Se precisar colocar parâmetros aqui, exportar a class direto e lá fora colocar o new.