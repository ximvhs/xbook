import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPhonenumberComponent } from './input-phonenumber.component';

describe('InputPhonenumberComponent', () => {
  let component: InputPhonenumberComponent;
  let fixture: ComponentFixture<InputPhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
