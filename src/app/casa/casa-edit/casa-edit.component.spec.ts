import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaEditComponent } from './casa-edit.component';

describe('CasaEditComponent', () => {
  let component: CasaEditComponent;
  let fixture: ComponentFixture<CasaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
