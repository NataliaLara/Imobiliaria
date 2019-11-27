import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-casa-list',
  templateUrl: './casa-list.component.html',
  styleUrls: ['./casa-list.component.css']
})
export class CasaListComponent implements OnInit {


  casas: any;
  displayedColumns = ['quartos', 'suites', 'vagas','bairro','valoraluguel'];
  dataSource = new CasaDataSource(this.casaService);

  constructor(private casaService: CasaService) { }

  ngOnInit() {
    this.casaService.getCasas()
      .subscribe(res => {
        console.log(res);
        this.casas = res;
      }, err => {
        console.log(err);
      });
  }
}

export class CasaDataSource extends DataSource<any> {
  constructor(private casaService: CasaService) {
    super()
  }

  connect() {
    return this.casaService.getCasas();
  }

  disconnect() {

  }
}
