const Knex = require('knex');
const KnexFile = require('../../knexfile')['development'];

module.exports = (settings) => {

  if (!settings) settings = KnexFile;
  return new Knex(settings);

}