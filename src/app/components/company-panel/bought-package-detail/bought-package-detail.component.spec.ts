import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtPackageDetailComponent } from './bought-package-detail.component';

describe('BoughtPackageDetailComponent', () => {
  let component: BoughtPackageDetailComponent;
  let fixture: ComponentFixture<BoughtPackageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoughtPackageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
