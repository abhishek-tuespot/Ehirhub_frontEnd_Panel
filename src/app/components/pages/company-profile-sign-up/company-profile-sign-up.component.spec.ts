import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileSignUpComponent } from './company-profile-sign-up.component';

describe('CompanyProfileSignUpComponent', () => {
  let component: CompanyProfileSignUpComponent;
  let fixture: ComponentFixture<CompanyProfileSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
