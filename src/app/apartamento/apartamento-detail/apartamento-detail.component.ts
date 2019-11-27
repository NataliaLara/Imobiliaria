import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartamentoService } from '../apartamento.service';

@Component({
  selector: 'app-apartamento-detail',
  templateUrl: './apartamento-detail.component.html',
  styleUrls: ['./apartamento-detail.component.css']
})
export class ApartamentoDetailComponent implements OnInit {

  apartamento = {};

  constructor(private route: ActivatedRoute, private apartamentoService: ApartamentoService, private router: Router) { }

  ngOnInit() {
    this.getApartamentoDetails(this.route.snapshot.params['id']);
  }

  getApartamentoDetails(id) {
    this.apartamentoService.getApartamento(id)
      .subscribe(data => {
        console.log(data);
        this.apartamento = data;
      }   );
      console.log(this.apartamento);
  }

  deleteApartamento(id) {
    this.apartamentoService.deleteApartamento(id)
      .subscribe(res => {
          this.router.navigate(['/apartamentos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  getBoolValue(bool:Boolean){
    if(bool==true){
      return "Sim"
    }else
      return "Não"
  }

}
