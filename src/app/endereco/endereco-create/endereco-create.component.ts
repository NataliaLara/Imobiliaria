import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {

  enderecoForm: FormGroup;
  bairro:string='';
  cidade:string='';
  estado:string='';

  constructor(private router: Router, private enderecoService: EnderecoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enderecoForm = this.formBuilder.group({
      'bairro' : [null, Validators.required],
      'cidade' : [null, Validators.required],
      'estado' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.enderecoService.postEndereco(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/endereco-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
