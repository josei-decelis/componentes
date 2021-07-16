import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  _url = 'https://testapi.io/api/falsoBFF/personas';
  constructor(private http: HttpClient) {
    console.log('servicio persona');
  }
  getPersonas() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url);
  }
}
