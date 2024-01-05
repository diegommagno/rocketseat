const knex = require("../database/knex"); /* importa o knex */

class TagsController {
  async index(request, response) {
    const user_id = request.user.id;

    /* Pede para ir nas tags e filtrar onde é igual ao user_id para exibirmos todas as tags desse usuário */
    const tags = await knex("tags")
    .where({ user_id })
    .groupBy("name")

    return response.json(tags);
  }
}

module.exports = TagsController;