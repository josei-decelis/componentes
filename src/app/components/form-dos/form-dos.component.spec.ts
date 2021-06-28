import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDosComponent } from './form-dos.component';

describe('FormDosComponent', () => {
  let component: FormDosComponent;
  let fixture: ComponentFixture<FormDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
