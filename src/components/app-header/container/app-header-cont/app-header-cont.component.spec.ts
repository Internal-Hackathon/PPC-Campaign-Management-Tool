import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderContComponent } from './app-header-cont.component';

describe('AppHeaderContComponent', () => {
  let component: AppHeaderContComponent;
  let fixture: ComponentFixture<AppHeaderContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
