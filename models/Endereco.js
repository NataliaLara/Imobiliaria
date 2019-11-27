var mongoose = require('mongoose');

var EnderecoSchema = new mongoose.Schema({
  bairro: String,
  cidade: { type: String, default: 'Belo Horizonte' },
  estado: { type: String, default: 'Minas Gerais' },
  siglaestado: { type: String, default: 'MG' },
  //updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Endereco', EnderecoSchema);
