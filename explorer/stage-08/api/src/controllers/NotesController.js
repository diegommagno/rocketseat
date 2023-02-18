const knex = require("../database/knex"); /* importa o knex */

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body; /* importa informações de dentro do body da requisição feita no Insomnia */
    const { user_id } = request.params; /* importa informações de dentro do params da requisição feita no Insomnia */

    const note_id = knex("notes").insert({
      title,
      description,
      user_id,
    }); /* insere as informações no banco de dados, na tabela notes */

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    }); 

    await knex("links").insert(linksInsert); /* insere as informações no banco de dados, na tabela links */

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name, 
        user_id
      }
    });

    await knex("tags").insert(tagsInsert); /* insere as informações no banco de dados, na tabela tags */

    response.json(); /* retorna informações de dentro do response feita no Insomnia */

  }
}

module.exports = NotesController;
