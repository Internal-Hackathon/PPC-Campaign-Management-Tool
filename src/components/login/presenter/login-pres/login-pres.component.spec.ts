import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPresComponent } from './login-pres.component';

describe('LoginPresComponent', () => {
  let component: LoginPresComponent;
  let fixture: ComponentFixture<LoginPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
