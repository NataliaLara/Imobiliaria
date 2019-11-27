import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasaService } from '../casa.service';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import {Endereco} from '../../../../models/Endereco';
import{EnderecoService} from '../../endereco/endereco.service';

export class Page<T> {

  totalElements: number;
  content: T[];
  last: boolean;

}
@Component({
  selector: 'app-casa-create',
  templateUrl: './casa-create.component.html',
  styleUrls: ['./casa-create.component.css']
})

export class CasaCreateComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  //enderecos:Endereco[];
  enderecos:any;
  casaForm: FormGroup;
  enableForm: FormGroup;
  quartos: Number;
  suites: Number;
  sala_estar: Number;
  vagas:Number;
  area:Number;
  valoraluguel:Number;
  armario_embutido:Boolean;
  descrição:String;
  rua:String;
  numero:String;
  endereco:{
    bairro:String,
    cidade:String,
    estado:String,
  }


  constructor(private router: Router, private casaService: CasaService,
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
    this.casaForm = this.formBuilder.group({
      'quartos' : [null, Validators.required],
      'suites' : [null, Validators.required],
      'sala_estar' : [null, Validators.required],
      'vagas' : [null, Validators.required],
      'area' : [null, Validators.required],
      'armario_embutido' : [null, Validators],
      'descricao' : [null, Validators.required],
      'valoraluguel' : [null, Validators.required],
      'endereco' : [null, Validators.required],
      'numero' : [null, Validators.required],
      'rua' : [null, Validators.required]
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
    this.casaService.postCasa(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/casa-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
