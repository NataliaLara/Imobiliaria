var mongoose = require('mongoose');

var ApartamentoSchema = new mongoose.Schema({
  quartos: Number,
  suites: Number,
  sala_estar: Number,
  sala_jantar:Number,
  vagas:Number,
  area:Number,
  armario_embutido:{type: Boolean, default: false},
  descricao:String,
  andar:String,
  valorcondominio:Number,
  valoraluguel:Number,
  portaria24h:{type: Boolean, default: false},
  apto:String,
  rua:String,
  numero:String,
  endereco:{
    bairro:String,
    cidade: { type: String, default: 'Belo Horizonte' },
    estado: { type: String, default: 'Minas Gerais' },
    siglaestado: { type: String, default: 'MG' },
  }
});

module.exports = mongoose.model('Apartamento', ApartamentoSchema);
