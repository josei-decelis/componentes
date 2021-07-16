import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  public datos:Persona | any;
  lista:Array<any>=[];
  public personas: Array<any> = [];

  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((resp:any) => {
      this.datos=resp;
      console.log(resp);
    })
    console.log(this.datos);
  }
}
