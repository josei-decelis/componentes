import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTresComponent } from './form-tres.component';

describe('FormTresComponent', () => {
  let component: FormTresComponent;
  let fixture: ComponentFixture<FormTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
