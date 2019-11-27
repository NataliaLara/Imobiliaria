import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})
export class EnderecoListComponent implements OnInit {

  enderecos: any;
  displayedColumns = ['bairro', 'cidade', 'estado','siglaestado'];
  dataSource = new EnderecoDataSource(this.apiService);

  constructor(private apiService: EnderecoService ) { }

  ngOnInit() {
    this.apiService.getEnderecos()
      .subscribe(res => {
        console.log(res);
        this.enderecos = res;
      }, err => {
        console.log(err);
      });
      
  }
}

export class EnderecoDataSource extends DataSource<any> {
  constructor(private apiService: EnderecoService) {
    super()
  }

  connect() {
    return this.apiService.getEnderecos();
  }

  disconnect() {

  }
}
