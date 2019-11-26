var mongoose = require('mongoose');


var ApartamentoSchema = new mongoose.Schema({
  quartos: Number,
  suites: Number,
  sala_estar: Number,
  sala_jantar:Number,
  vagas:Number,
  area:Number,
  armario_embutido:Boolean,
  descricao:String,
  andar:String,
  valorcondominio:Number,
  portaria24h:Boolean,
  endereco:{
    bairro:String,
    cidade:String,
    estado:String,
  }
});

module.exports = mongoose.model('Apartamento', ApartamentoSchema);
