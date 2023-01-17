export class GitHubUser {
  static search(username) {

    const endPoint = `https://api.github.com/users/${username}`

    // o returno dessa função será as informações desse usuário, chamado de user (eu que escolho o nome na hora do then, depois que recebi os dados da função em GitHubUser.search).
    return fetch(endPoint).then(data => data.json()).then(({ login, name, public_repos, followers }) => ({

        login,
        name,
        public_repos,
        followers
    }))
  }
}