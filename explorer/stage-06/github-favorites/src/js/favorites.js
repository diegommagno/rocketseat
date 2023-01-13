// Vamos primeiro distribuir a aplicação em duas classes. 
// Uma responsável por construir a tabela e outra responsável por fazer a lógica dos dados ou guardar os dados. 
// Vamos unir as duas utilizando a ideia de herança.

// Classe que vai conter a lógica dos dados
// Como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root) // passar onde esta o root
    
    this.load() // carregar os dados
  }

  // Função que vai carregar os dados
  load() {
    this.entries = [
      {
      login: 'diegommagno',
      name: 'Diego M. Magno',
      public_repos: '22',
      followers: '80'
      },
      {
        login: 'diego3g',
        name: 'Diego S. Fernandes',
        public_repos: '23000',
        followers: '80'
      }
    ]
  }

  delete(user) {
    // Higher Order Function (map, filter, finder, reduce)
    const filteredEntries = this.entries.filter( entry => entry.login !== user.login) // se o login que eu quero remover (entry.logn) for diferente do user.login, mantém, caso contrário, remove.
  
    this.entries = filteredEntries // atualizar a lista de usuários
    // this.entries, vai receber o array filtrado, ou seja, sem o usuário que eu quero remover.
    this.update() // atualizar a tabela
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
  }

  // Toda vez que um dado for alterado será chamada.
  update() {
    this.removeAllTr()
    
    // Criar uma linha para cada usuário, user é um objeto, então console.log(user) mostra os dados do usuário.
    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Foto de perfil do usuário ${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Deseja realmente remover essa linha?')

        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row) // adicionar a linha na tabela, recebe um elemento HTML já criado.
    })
    
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/diegommagno.png" alt="Foto de perfil do usuário" />
        <a href="https://github.com/diegommagno">
          <p>Diego M. Magno</p>
          <span>diegommagno</span>
        </a>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td>
        <button class="remove">&times;</button>
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