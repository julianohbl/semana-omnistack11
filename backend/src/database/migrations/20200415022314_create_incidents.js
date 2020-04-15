
exports.up = function(knex) {
  // criando tabelas
  return knex.schema.createTable('incidents', function(table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // relacionamento com a tabela ongs
    table.string('ong_id').notNullable();

    // fk
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
