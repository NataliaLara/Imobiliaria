import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from '../casa.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';

@Component({
  selector: 'app-casa-edit',
  templateUrl: './casa-edit.component.html',
  styleUrls: ['./casa-edit.component.css']
})
export class CasaEditComponent implements OnInit {
  
  casaForm: FormGroup;
  enderecos:any;
  id:string = '';
  quartos: number;
  suites: number;
  sala_estar: number;
  vagas:number;
  area:number;
  armario_embutido:boolean;
  valoraluguel:Number;
  descricao:string;
  rua:String;
  numero:String;
  endereco:{
    bairro:string,
    cidade:string,
    estado:string,  }

  constructor(private router: Router, private route: ActivatedRoute,
     private casaService: CasaService, private formBuilder: FormBuilder,
     private enderecoService:EnderecoService) { 
      this.enderecoService.getEnderecos()
      .subscribe(res => {
        console.log(res);
        this.enderecos = res;
      }, err => {
        console.log(err);
      });
     }

  ngOnInit() {
    this.getCasa(this.route.snapshot.params['id']);
    this.casaForm = this.formBuilder.group({
      'quartos' : [null, Validators.required],
      'suites' : [null, Validators.required],
      'sala_estar' : [null, Validators.required],
      'vagas' : [null, Validators.required],
      'area' : [null, Validators.required],
      'armario_embutido' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'endereco' : [null, Validators.required],
      'valoraluguel' : [null, Validators.required],
      'numero' : [null, Validators.required],
      'rua' : [null, Validators.required]
    });
  }

  getCasa(id) {
    this.casaService.getCasa(id).subscribe(data => {
      this.id = data._id;
      this.casaForm.setValue({
        quartos: data.quarto,
        suites: data.suite,
        sala_estar: data.sala_estar,
        vagas:data.vagas,
        area:data.area,
        armario_embutido:data.armario_embutido,
        descricao:data.descricao,
        endereco:data.endereco,
        valoraluguel:data.valoraluguel
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.casaService.updateCasa(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/casa-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  casaDetails() {
    this.router.navigate(['/casa-details', this.id]);
  }
}
