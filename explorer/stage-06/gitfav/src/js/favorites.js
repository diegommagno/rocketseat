import { GitHubUser } from './github-user.js'


// Vamos primeiro distribuir a aplicação em duas classes. 
// Uma responsável por construir a tabela e outra responsável por fazer a lógica dos dados ou guardar os dados. 
// Vamos unir as duas utilizando a ideia de herança.

// Classe que vai conter a lógica dos dados
// Como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root) // passar onde esta o root
    
    this.load() // carregar os dados
    GitHubUser.search('diegommagno').then(user => console.log(user))
  }

  // Função que vai carregar os dados
  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [] // se não tiver nada no localStorage, vai retornar um array vazio.
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries)) // salvar os dados no localStorage
  }

  async add(username) {
    try { 

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('User already added.') // se o usuário já existir, gera esse erro
      }

      const user = await GitHubUser.search(username)

      if(user.login === undefined) {
        throw new Error('User not found.') // se o usuário não existir, gera esse erro
      } 

      this.entries = [user, ...this.entries] // adicionar o usuário na lista de usuários. Spread operator, pega todos os itens do array e coloca dentro do novo array. Esse array então é esse novo dato + todo o array antigo.
      this.update() // atualizar a tabela
      this.save() // salvar os dados no localStorage

    } catch(error) { // se der erro, vai cair aqui
      alert(error.message) // e mostra a mensagem de erro
    }

    // GitHubUser.search(username).then(user => {
    //   this.entries.push(user) // adicionar o usuário na lista de usuários
    //   this.update() // atualizar a tabela
    // })
  }

  delete(user) {
    // Higher Order Function (map, filter, finder, reduce)
    const filteredEntries = this.entries.filter( entry => entry.login !== user.login) // se o login que eu quero remover (entry.logn) for diferente do user.login, mantém, caso contrário, remove.
  
    this.entries = filteredEntries // atualizar a lista de usuários
    // this.entries, vai receber o array filtrado, ou seja, sem o usuário que eu quero remover.
    this.update() // atualizar a tabela
    this.save() // salvar os dados no localStorage
  }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  // Aqui é a herança, puxando tudo o que tem na Favorites
  constructor(root) {
    super(root) // super é o construtor da classe pai. Essa linha e o link, a cola entre as duas classes. Ela chama o construtor da classe pai e passa o root para ele.

    this.tbody = this.root.querySelector('table tbody')

    // console.log(this.root); // #app
    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector('.user button')

    addButton.onclick = () => {
      const input = this.root.querySelector('.user input')
      this.add(input.value)
      input.value = ''
    }
  }

  // Toda vez que um dado for alterado será chamada.
  update() {
    this.removeAllTr()
    
    // Criar uma linha para cada usuário, user é um objeto, então console.log(user) mostra os dados do usuário.
    if(this.entries.length > 0) {
      this.entries.forEach( user => {
        const row = this.createRow()
  
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Foto de perfil do usuário ${user.login}`
        row.querySelector('.user a').href = `https://github.com/${user.login}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
  
        row.querySelector('.remove').onclick = () => {
          const isOk = confirm('Do you wish to remove this line?')
  
          if(isOk) {
            this.delete(user)
          }
        }
  
        this.tbody.append(row) // adicionar a linha na tabela, recebe um elemento HTML já criado.
      })
    } else {
      const tr = document.createElement('tr')
      tr.innerHTML = `
      <td class="empty-state">
        <img src="./src/img/star.svg" alt="" />
        <p>No favorite user added</p>
      </td>
      `

      this.tbody.append(tr)
    }
    
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/diegommagno.png" alt="User profile photo" />
        <a href="https://github.com/diegommagno">
          <p>Diego M. Magno</p>
          <span>diegommagno</span>
        </a>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td>
        <button class="remove">Remove</button>
      </td>
    `

    return tr
    // Criar TR com createElement, criar o content e inserir com innerHTML na TR, return tr para ter os dados retornados depois de manipulados.
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    }) // pegar todas as linhas. Para cada linha (forEach), execute essa função.
  }
}