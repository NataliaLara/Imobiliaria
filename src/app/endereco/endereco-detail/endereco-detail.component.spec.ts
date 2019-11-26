import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoDetailComponent } from './endereco-detail.component';

describe('EnderecoDetailComponent', () => {
  let component: EnderecoDetailComponent;
  let fixture: ComponentFixture<EnderecoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
