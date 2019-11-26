import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartamentoService } from '../apartamento.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{EnderecoService} from '../../endereco/endereco.service';

@Component({
  selector: 'app-apartamento-edit',
  templateUrl: './apartamento-edit.component.html',
  styleUrls: ['./apartamento-edit.component.css']
})
export class ApartamentoEditComponent implements OnInit {
  
  apartamentoForm: FormGroup;
  enderecos:any;
  id:string = '';
  quartos: number;
  suites: number;
  sala_estar: number;
  sala_jantar:Number;
  vagas:number;
  area:number;
  armario_embutido:boolean;
  andar:String;
  valorcondominio:Number;
  portaria24h:Boolean;
  descricao:string;
  endereco:{
    bairro:string,
    cidade:string,
    estado:string,  }

  constructor(private router: Router, private route: ActivatedRoute,
     private apartamentoService: ApartamentoService, private formBuilder: FormBuilder,
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
    this.getApartamento(this.route.snapshot.params['id']);
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

  getApartamento(id) {
    this.apartamentoService.getApartamento(id).subscribe(data => {
      this.id = data._id;
      this.apartamentoForm.setValue({
        quartos: data.quarto,
        suites: data.suite,
        sala_estar: data.sala_estar,
        vagas:data.vagas,
        area:data.area,
        armario_embutido:data.armario_embutido,
        descricao:data.descricao,
        endereco:data.endereco,
        sala_jantar:data.sala_jantar,
        andar:data.andar,
        valorcondominio:data.valorcondominio,
        portaria24h:data.portaria24h
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.apartamentoService.updateApartamento(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/apartamento-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  apartamentoDetails() {
    this.router.navigate(['/apartamento-details', this.id]);
  }
}
