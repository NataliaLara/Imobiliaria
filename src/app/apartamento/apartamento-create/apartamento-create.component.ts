import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartamentoService } from '../apartamento.service';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import {Endereco} from '../../../../models/Endereco';
import{EnderecoService} from '../../endereco/endereco.service';


@Component({
  selector: 'app-apartamento-create',
  templateUrl: './apartamento-create.component.html',
  styleUrls: ['./apartamento-create.component.css']
})
export class ApartamentoCreateComponent implements OnInit {

  //enderecos:Endereco[];
  enderecos:any;
  apartamentoForm: FormGroup;
  quartos: Number;
  suites: Number;
  sala_estar: Number;
  sala_jantar:Number;
  vagas:Number;
  area:Number;
  armario_embutido:Boolean;
  descricao:String;
  andar:String;
  valorcondominio:Number;
  portaria24h:Boolean;
  endereco:{
    bairro:String,
    cidade:String,
    estado:String,
  }

  constructor(private router: Router, private apartamentoService: ApartamentoService,
     private formBuilder: FormBuilder,private enderecoService:EnderecoService) { 
      //this.findByNomeEndereco();
      //this.findByEndereco();
      this.enderecoService.getEnderecos()
      .subscribe(res => {
        console.log(res);
        this.enderecos = res;
      }, err => {
        console.log(err);
      });
      //console.log("End"+this.enderecos);
     }

  ngOnInit() {
    this.apartamentoForm = this.formBuilder.group({
      'quartos' : [null, Validators.required],
      'suites' : [null, Validators.required],
      'sala_estar' : [null, Validators.required],
      'sala_jantar' : [null, Validators.required],
      'vagas' : [null, Validators.required],
      'area' : [null, Validators.required],
      'armario_embutido' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'andar' : [null, Validators.required],
      'valorcondominio' : [null, Validators.required],
      'portaria24h' : [null, Validators.required],
      'endereco' : [null, Validators.required]
    });
    
  }
  findByEndereco(){
  this.enderecoService.getEnderecos()
      .subscribe(res => {
        console.log("Endereco"+res);
        this.enderecos = res;
      }, err => {
        console.log("Erro"+err);
      });
  }

  onFormSubmit(form:NgForm) {
    this.apartamentoService.postApartamento(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/apartamento-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
