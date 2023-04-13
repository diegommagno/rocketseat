exports.up = knex => knex.schema.createTable("links", table => { 
  /* "links" é onde coloca o nome da tabela. UP é o processo de criar a tabela. */
  
    table.increments("id");
    table.text("url").notNullable(); /* Não permito um nulo aqui */

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); /* Se eu deletar a nota que tem esse link vinculado, deleta o link também */
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
    
  exports.down = knex => knex.schema.dropTable("links"); 
  /* DOWN é o processo de deletar a tabela. Troca para dropTable ao invés de createTable e somente passa o nome da tabela. */