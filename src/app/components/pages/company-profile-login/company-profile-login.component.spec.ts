import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileLoginComponent } from './company-profile-login.component';

describe('CompanyProfileLoginComponent', () => {
  let component: CompanyProfileLoginComponent;
  let fixture: ComponentFixture<CompanyProfileLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
