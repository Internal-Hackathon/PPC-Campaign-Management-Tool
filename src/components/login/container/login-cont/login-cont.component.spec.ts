import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContComponent } from './login-cont.component';

describe('LoginContComponent', () => {
  let component: LoginContComponent;
  let fixture: ComponentFixture<LoginContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
