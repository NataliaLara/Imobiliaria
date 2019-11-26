var mongoose = require('mongoose');

var EnderecoSchema = new mongoose.Schema({
  bairro: String,
  cidade: String,
  estado: String,
  //updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Endereco', EnderecoSchema);
