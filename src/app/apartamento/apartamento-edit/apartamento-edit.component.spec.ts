import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoEditComponent } from './apartamento-edit.component';

describe('ApartamentoEditComponent', () => {
  let component: ApartamentoEditComponent;
  let fixture: ComponentFixture<ApartamentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
