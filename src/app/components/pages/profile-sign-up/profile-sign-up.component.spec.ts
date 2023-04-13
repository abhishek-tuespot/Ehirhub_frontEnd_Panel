import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSignUpComponent } from './profile-sign-up.component';

describe('ProfileSignUpComponent', () => {
  let component: ProfileSignUpComponent;
  let fixture: ComponentFixture<ProfileSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
