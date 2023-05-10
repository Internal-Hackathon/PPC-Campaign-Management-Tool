import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderPresComponent } from './app-header-pres.component';

describe('AppHeaderPresComponent', () => {
  let component: AppHeaderPresComponent;
  let fixture: ComponentFixture<AppHeaderPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
