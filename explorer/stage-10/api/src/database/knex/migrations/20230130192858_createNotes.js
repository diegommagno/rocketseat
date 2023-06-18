exports.up = knex => knex.schema.createTable("notes", table => { 
/* "notes" é onde coloca o nome da tabela. UP é o processo de criar a tabela. */

  table.increments("id");
  table.text("title");
  table.text("description");
  table.integer("user_id").references("id").inTable("users");
  /* Crio um campo nessa tabela chamado user_id fazendo referencia a id na tabela users, ou seja, a id do usuário. Com isso, fica obrigatório ter um usuário para criar uma nota e ela fica vinculada ao user. */

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
    
});
  
exports.down = knex => knex.schema.dropTable("notes"); 
/* DOWN é o processo de deletar a tabela. Troca para dropTable ao invés de createTable e somente passa o nome da tabela. */