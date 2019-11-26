import { Component, OnInit } from '@angular/core';
import { ApartamentoService } from '../apartamento.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apartamento-list',
  templateUrl: './apartamento-list.component.html',
  styleUrls: ['./apartamento-list.component.css']
})
export class ApartamentoListComponent implements OnInit {


  apartamentos: any;
  displayedColumns = ['quartos', 'suites', 'vagas','bairro'];
  dataSource = new ApartamentoDataSource(this.apartamentoService);

  constructor(private apartamentoService: ApartamentoService) { }

  ngOnInit() {
    this.apartamentoService.getApartamentos()
      .subscribe(res => {
        console.log(res);
        this.apartamentos = res;
      }, err => {
        console.log(err);
      });
  }
}

export class ApartamentoDataSource extends DataSource<any> {
  constructor(private apartamentoService: ApartamentoService) {
    super()
  }

  connect() {
    return this.apartamentoService.getApartamentos();
  }

  disconnect() {

  }
}
