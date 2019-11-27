import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnderecoListComponent } from './endereco/endereco-list/endereco-list.component';
import { EnderecoCreateComponent } from './endereco/endereco-create/endereco-create.component';
import { EnderecoDetailComponent } from './endereco/endereco-detail/endereco-detail.component';
import { EnderecoEditComponent } from './endereco/endereco-edit/endereco-edit.component';

import { InicioComponent } from './inicio/inicio.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { CasaListComponent } from './casa/casa-list/casa-list.component';
import { CasaCreateComponent } from './casa/casa-create/casa-create.component';
import { CasaDetailComponent } from './casa/casa-detail/casa-detail.component';
import { CasaEditComponent } from './casa/casa-edit/casa-edit.component';

import { ApartamentoListComponent } from './apartamento/apartamento-list/apartamento-list.component';
import { ApartamentoCreateComponent } from './apartamento/apartamento-create/apartamento-create.component';
import { ApartamentoDetailComponent } from './apartamento/apartamento-detail/apartamento-detail.component';
import { ApartamentoEditComponent } from './apartamento/apartamento-edit/apartamento-edit.component';


import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  //novos
  MatToolbarModule,  
  MatSidenavModule, 
  MatGridListModule,  
  MatMenuModule} from "@angular/material";

import {MatRadioModule} from '@angular/material/radio';  
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion'; 




const appRoutes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'enderecos',
    component: EnderecoListComponent,
    data: { title: 'Endereco List' }
  },
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'endereco-create',
    component: EnderecoCreateComponent,
    data: { title: 'Create Endereco' }
  },
  {
    path: 'endereco-edit/:id',
    component: EnderecoEditComponent,
    data: { title: 'Edit Endereco' }
  },
  {
    path: 'endereco-details/:id',
    component: EnderecoDetailComponent,
    data: { title: 'Endereco Details' }
  },
  {
    path: 'casa-create',
    component: CasaCreateComponent,
    data: { title: 'Create Casa' }
  },
  {
    path: 'casas',
    component: CasaListComponent,
    data: { title: 'Casa List' }
  },
  {
    path: 'casa-details/:id',
    component: CasaDetailComponent,
    data: { title: 'Casa Details' }
  },
  {    
    path: 'casa-edit/:id',
    component: CasaEditComponent,
    data: { title: 'Edit Casa'  }
  },

  {
    path: 'apartamento-create',
    component: ApartamentoCreateComponent,
    data: { title: 'Create Apartamento' }
  },
  {
    path: 'apartamentos',
    component: ApartamentoListComponent,
    data: { title: 'Apartamento List' }
  },
  {
    path: 'apartamento-details/:id',
    component: ApartamentoDetailComponent,
    data: { title: 'Apartamento Details' }
  },
  {    
    path: 'apartamento-edit/:id',
    component: ApartamentoEditComponent,
    data: { title: 'Edit Apartamento'  }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    EnderecoListComponent,
    InicioComponent,
    DashboardComponent,
    EnderecoCreateComponent,
    EnderecoDetailComponent,
    EnderecoEditComponent,
    CasaListComponent,
    CasaCreateComponent,
    CasaDetailComponent,
    CasaEditComponent,
    ApartamentoListComponent,
    ApartamentoCreateComponent,
    ApartamentoDetailComponent,
    ApartamentoEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    ListboxModule,
    DropdownModule,
    //novos
    MatToolbarModule,  
    MatSidenavModule, 
    MatGridListModule,  
    MatMenuModule,
    ButtonModule,
    AccordionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
