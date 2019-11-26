import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-detail',
  templateUrl: './endereco-detail.component.html',
  styleUrls: ['./endereco-detail.component.css']
})
export class EnderecoDetailComponent implements OnInit {

  endereco = {};

  constructor(private route: ActivatedRoute, private enderecoService: EnderecoService, 
    private router: Router) { }

  ngOnInit() {
    this.getEnderecoDetails(this.route.snapshot.params['id']);
  }

  getEnderecoDetails(id) {
    this.enderecoService.getEndereco(id)
      .subscribe(data => {
        console.log(data);
        this.endereco = data;
      }   );
      console.log("oi"+this.endereco);
  }

  deleteEndereco(id) {
    this.enderecoService.deleteEndereco(id)
      .subscribe(res => {
          this.router.navigate(['/enderecos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
