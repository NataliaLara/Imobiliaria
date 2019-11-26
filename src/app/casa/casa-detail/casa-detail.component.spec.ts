import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDetailComponent } from './casa-detail.component';

describe('CasaDetailComponent', () => {
  let component: CasaDetailComponent;
  let fixture: ComponentFixture<CasaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
