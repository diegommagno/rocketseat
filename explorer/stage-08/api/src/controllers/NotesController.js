const knex = require("../database/knex"); /* importa o knex */

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body; /* importa informações de dentro do body da requisição feita no Insomnia */
    const { user_id } = request.params; /* importa informações de dentro do params da requisição feita no Insomnia */

    /* Vou armazenar em note_id a id da nota que acabei de cadastrar porque as tabelas tags e links vão usar. 
    Nesse caso eu crio a nota e já recupero o id da nota que acabei de criar. Já vou usar isso agora nos próximos códigos porque as tags e links são inseridos daqui mesmo.  */
    const note_id = await knex("notes").insert({
      title,
      description,
      user_id,
    }); /* insere as informações no banco de dados, na tabela notes. */

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

  async show(request, response) {
    const { id } = request.params; /* pega o ID da nota que foi passado através do request */

    const note = await knex("notes").where({ id }).first();  /* buscar na tabela notas a primeira nota com essa id */
    const tags = await knex("tags").where({ note_id: id }).orderBy("name");  /* buscar na tabela tags uma note_id que é igual a id */
    const links = await knex("links").where({ note_id: id }).orderBy("created_at");  /* buscar na tabela tags uma note_id que é igual a id */

    /* ...note para colocar todos os detalhes da nota aqui */
    return response.json({
      ...note,
      tags,
      links
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete(); /* deleta a nota com o id passado através do request */

    return response.json();
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query; /* query é algo dentro do insomnia que eu passo o valor do user_id digitando */

    let notes; /* cria uma variável notes que vou usar no if */

    if(tags) {
      const filterTags = tags.split(',').map(tag => tag.trim()); /* tags.split separa as tags passadas no request através do split */

      notes = await knex("tags").select(["notes.id", "notes.title", "notes.user_id"])
                                .where("notes.user_id", user_id)
                                .whereLike("notes.title", `%${title}%`)
                                .whereIn("name", filterTags)
                                .innerJoin("notes", "notes.id", "tags.note_id")
                                .orderBy("notes.title");
    } else {

      notes = await knex("notes").where({ user_id }).whereLike("title", `%${title}%`).orderBy("title");

    }

    const userTags = await knex("tags").where({ user_id }); /* filtro em todas as tags onde a tag seja igual ao id do usuário */

    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id);

      return {
        ...note,
        tags: noteTags
      }
    });

    return response.json({ notesWithTags });
  }
}

module.exports = NotesController;