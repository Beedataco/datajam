exports.up = function(knex) {
    return knex.schema.createTable('obrasPub', table => {
        table.integer('codigo').primary();
        table.text('nombre');
        table.string('tipo_obra');
        table.string('direccion');
        table.string('barrio');
        table.string('comuna');
        table.string('coordenadas');
        table.string('contratista');
        table.string('interventor');
        table.string('monto');
        table.integer('empleos_generados');
        table.string('fecha_inicio');
        table.string('fecha_fin');
        table.integer('meses_duracion');
        table.integer('porcentaje_avance');
        table.text('descripcion');
        table.text('avance');
        table.text('registro_fotografico');
        table.text('secop');
        table.text('secop_interventoria');
        table.text('link');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('obrasPub');
};
