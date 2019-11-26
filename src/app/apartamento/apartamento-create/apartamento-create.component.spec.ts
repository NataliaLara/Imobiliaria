import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoCreateComponent } from './apartamento-create.component';

describe('ApartamentoCreateComponent', () => {
  let component: ApartamentoCreateComponent;
  let fixture: ComponentFixture<ApartamentoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
