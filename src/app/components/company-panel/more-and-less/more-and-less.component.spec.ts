import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAndLessComponent } from './more-and-less.component';

describe('MoreAndLessComponent', () => {
  let component: MoreAndLessComponent;
  let fixture: ComponentFixture<MoreAndLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAndLessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAndLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
