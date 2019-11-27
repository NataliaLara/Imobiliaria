import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaService } from '../casa.service';

@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent implements OnInit {

  casa = {};

  constructor(private route: ActivatedRoute, private casaService: CasaService, private router: Router) { }

  ngOnInit() {
    this.getCasaDetails(this.route.snapshot.params['id']);
  }

  getCasaDetails(id) {
    this.casaService.getCasa(id)
      .subscribe(data => {
        console.log(data);
        this.casa = data;
      }   );
      console.log(this.casa);
  }

  deleteCasa(id) {
    this.casaService.deleteCasa(id)
      .subscribe(res => {
          this.router.navigate(['/casas']);
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
