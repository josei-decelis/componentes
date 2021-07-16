import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  pageNumber = 1;
  currentPage: number = 1;
  pageSize = 5;
  lista: Array<string> = [
    'elemento 1',
    'elemento 2',
    'elemento 3',
    'elemento 4',
    'elemento 5',
    'elemento 6',
    'elemento 7',
    'elemento 8',
    'elemento 9',
    'elemento 10',
    'elemento 11',
    'elemento 12',
    'elemento 13',
    'elemento 14',
    'elemento 15',
    'elemento 16',
  ];
  paises: Array<string> =
    ['Afganistán',
    'Albania',
    'Alemania',
    'Andorra',
    'Angola',
    'Antigua y Barbuda',
    'Arabia Saudita',
    'Argelia',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaiyán',
    'Bahamas',
    'Bangladés',
    'Barbados',
    'Baréin',
    'Bélgica',
    'Belice',
    'Benín',
    'Bielorrusia',
    'Birmania',
    'Bolivia',
    'Bosnia y Herzegovina',
    'Botsuana',
    'Brasil',
    'Brunéi',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Bután',
    'Cabo Verde',
    'Camboya',
    'Camerún',
    'Canadá',
    'Catar',
    'Chad',
    'Chile',
    'China',
    'Chipre',
    'Ciudad del Vaticano',
    'Colombia',
    'Comoras',
    'Corea del Norte',
    'Corea del Sur',
    'Costa de Marfil',
    'Costa Rica',
    'Croacia',
    'Cuba',
    'Dinamarca',
    'Dominica',
    'Ecuador',
    'Egipto',
    'El Salvador',
    'Emiratos Árabes Unidos',
    'Eritrea',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estados Unidos',
    'Estonia',
    'Etiopía',
    'Filipinas',
    'Finlandia',
    'Fiyi',
    'Francia',
    'Gabón',
    'Gambia',
    'Georgia',
    'Ghana',
    'Granada',
    'Grecia',
    'Guatemala',
    'Guyana',
    'Guinea',
    'Guinea ecuatorial',
    'Guinea-Bisáu',
    'Haití',
    'Honduras',
    'Hungría',
    'India',
    'Indonesia',
    'Irak',
    'Irán',
    'Irlanda',
    'Islandia',
    'Islas Marshall',
    'Islas Salomón',
    'Israel',
    'Italia',
    'Jamaica',
    'Japón',
    'Jordania',
    'Kazajistán',
    'Kenia',
    'Kirguistán',
    'Kiribati',
    'Kuwait',
    'Laos',
    'Lesoto',
    'Letonia',
    'Líbano',
    'Liberia',
    'Libia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Madagascar',
    'Malasia',
    'Malaui',
    'Maldivas',
    'Malí',
    'Malta',
    'Marruecos',
    'Mauricio',
    'Mauritania',
    'México',
    'Micronesia',
    'Moldavia',
    'Mónaco',
    'Mongolia',
    'Montenegro',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nepal',
    'Nicaragua',
    'Níger',
    'Nigeria',
    'Noruega',
    'Nueva Zelanda',
    'Omán',
    'Países Bajos',
    'Pakistán',
    'Palaos',
    'Panamá',
    'Papúa Nueva Guinea',
    'Paraguay',
    'Perú',
    'Polonia',
    'Portugal',
    'Reino Unido',
    'República Centroafricana',
    'República Checa',
    'República de Macedonia',
    'República del Congo',
    'República Democrática del Congo',
    'República Dominicana',
    'República Sudafricana',
    'Ruanda',
    'Rumanía',
    'Rusia',
    'Samoa',
    'San Cristóbal y Nieves',
    'San Marino',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Santo Tomé y Príncipe',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leona',
    'Singapur',
    'Siria',
    'Somalia',
    'Sri Lanka',
    'Suazilandia',
    'Sudán',
    'Sudán del Sur',
    'Suecia',
    'Suiza',
    'Surinam',
    'Tailandia',
    'Tanzania',
    'Tayikistán',
    'Timor Oriental',
    'Togo',
    'Tonga',
    'Trinidad y Tobago',
    'Túnez',
    'Turkmenistán',
    'Turquía',
    'Tuvalu',
    'Ucrania',
    'Uganda',
    'Uruguay',
    'Uzbekistán',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Yibuti',
    'Zambia',
    'Zimbabue'];
  listPages: Array<number> = [];
  numberPages = Math.ceil(this.lista.length / this.pageSize);
  constructor() {}

  ngOnInit(): void {
    console.log(this.numberPages);
    this.onPage(this.lista, this.pageSize, this.pageNumber);
    this.onListPages();
  }

  onPage(lista: Array<any>, pageSize: number, pageNumber: number) {
    return lista.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  onListPages() {
    for (let i = 0; i < this.numberPages; i++) {
      this.listPages[i] = i;
    }
  }

  nextPage() {
    if (this.numberPages > this.currentPage) {
      this.currentPage++;
    }
    this.pagination = this.onPage(this.lista, this.pageSize, this.currentPage);
  }

  previusPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.pagination = this.onPage(this.lista, this.pageSize, this.currentPage);
    console.log(this.pageNumber);
  }

  /*  onPageNumber(event: Event) {
    console.log((<HTMLButtonElement>event.target).value);
    this.pageNumber = parseInt((<HTMLButtonElement>event.target).value);
    console.log(this.pageNumber);
    this.onPage(this.lista, this.pageSize, this.pageNumber);
    console.log(this.pageNumber);
  } */

  onPageNumber(event: Event) {
    this.currentPage = parseInt((<HTMLButtonElement>event.target).value);
    console.log(this.currentPage);
    console.log(this.pageNumber);
    this.pagination = this.onPage(this.lista, this.pageSize, this.currentPage);
  }
  pagination = this.onPage(this.lista, this.pageSize, this.pageNumber);
}
