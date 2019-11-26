import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;

  
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)  );

  constructor(private router: Router,private breakpointObserver: BreakpointObserver) { }

  goToAddEndereco () {
    this.router.navigateByUrl('/endereco-create');
  }

  goToAddCasa () {
    this.router.navigateByUrl('/casa-create');
  }

  goToAddApartamento() {
    this.router.navigateByUrl('/apartamento-create');
  }

  ngOnInit() {
  }
}


