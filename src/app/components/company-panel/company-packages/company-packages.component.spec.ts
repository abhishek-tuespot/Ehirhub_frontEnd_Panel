import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPackagesComponent } from './company-packages.component';

describe('CompanyPackagesComponent', () => {
  let component: CompanyPackagesComponent;
  let fixture: ComponentFixture<CompanyPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
