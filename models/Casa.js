var mongoose = require('mongoose');


var CasaSchema = new mongoose.Schema({
  quartos: Number,
  suites: Number,
  sala_estar: Number,
  vagas:Number,
  area:Number,
  armario_embutido:{type: Boolean, default: false},
  descricao:String,
  valoraluguel:Number,
  rua:String,
  numero:String,
  endereco:{
    bairro:String,
    cidade: { type: String, default: 'Belo Horizonte' },
    estado: { type: String, default: 'Minas Gerais' },
    siglaestado: { type: String, default: 'MG' },
  }
});

module.exports = mongoose.model('Casa', CasaSchema);
