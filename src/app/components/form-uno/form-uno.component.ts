import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-uno',
  templateUrl: './form-uno.component.html',
  styleUrls: ['./form-uno.component.scss']
})
export class FormUnoComponent implements OnInit {

  formUno = new FormGroup({
    nombre: new FormControl('', [Validators.required ,Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }

  submit(event: any) {
    event.preventDefault();
    console.log(this.formUno)
  }


}
