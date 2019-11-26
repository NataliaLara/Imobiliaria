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

  //enderecos:Endereco[];
  enderecos:any;
  casaForm: FormGroup;
  quartos: Number;
  suites: Number;
  sala_estar: Number;
  vagas:Number;
  area:Number;
  armario_embutido:Boolean;
  descrição:String;
  endereco:{
    bairo:String,
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
      'armario_embutido' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'endereco' : [null, Validators.required]
    });
    

  }
  /*
  findByNomePais(){
    this.paisService.findAll(0).subscribe(
      (dados: Page<Pais>)=>{
        this.paises = dados.content;
        console.log("Find Pais", this.paises);
      }
    )
  }

  findByNomeEndereco(){
    this.enderecoService.getEnderecos().subscribe(
      (dados: Page<Endereco>)=>{
        this.enderecos = dados.content;
        console.log("Find Pais", this.enderecos);
      }
    );
  } */
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
