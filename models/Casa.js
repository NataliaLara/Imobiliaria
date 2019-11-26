var mongoose = require('mongoose');


var CasaSchema = new mongoose.Schema({
  quartos: Number,
  suites: Number,
  sala_estar: Number,
  vagas:Number,
  area:Number,
  armario_embutido:Boolean,
  descricao:String,
  endereco:{
    bairro:String,
    cidade:String,
    estado:String,
  }
});

module.exports = mongoose.model('Casa', CasaSchema);
