exports.up = knex => knex.schema.createTable("tags", table => { 
  /* "notes" é onde coloca o nome da tabela. Up é o processo de criar a tabela. */
  
    table.increments("id");
    table.text("name").notNullable(); /* Não permito um nulo aqui */
    table.text("description");

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); /* Se eu deletar a nota que tem essa tag vinculada, deleta a tag */
    table.integer("user_id").references("id").inTable("users");
    /* Crio um campo nessa tabela chamado user_id fazendo referencia a id na tabela users, ou seja, a id do usuário. Com isso, fica obrigatório ter um usuário para criar uma nota e ela fica vinculada ao user. */
      
  });
    
  exports.down = knex => knex.schema.dropTable("tags"); 
  /* Down é o processo de deletar a tabela. Troca para dropTable ao invés de createTable e somente passa o nome da tabela. */