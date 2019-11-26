import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaListComponent } from './casa-list.component';

describe('CasaComponent', () => {
  let component: CasaListComponent;
  let fixture: ComponentFixture<CasaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
