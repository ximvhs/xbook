import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheticComponent } from './synthetic.component';

describe('SyntheticComponent', () => {
  let component: SyntheticComponent;
  let fixture: ComponentFixture<SyntheticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
