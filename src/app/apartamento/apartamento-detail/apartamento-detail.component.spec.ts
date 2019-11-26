import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoDetailComponent } from './apartamento-detail.component';

describe('ApartamentoDetailComponent', () => {
  let component: ApartamentoDetailComponent;
  let fixture: ComponentFixture<ApartamentoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
