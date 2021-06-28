import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnoComponent } from './form-uno.component';

describe('FormUnoComponent', () => {
  let component: FormUnoComponent;
  let fixture: ComponentFixture<FormUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
