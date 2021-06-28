import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  pageNumber = 1;
  aux:number =1;
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
  listPages: Array<number> = [];
  numberPages = Math.ceil(this.lista.length / this.pageSize);
  constructor() {}

  ngOnInit(): void {
    console.log(this.numberPages);
    this.onPage(this.lista, this.pageSize, this.pageNumber);
    this.onListPages();
    console.log(this.pagination);
    console.log(this.listPages);
    console.log(this.listPages);

  }

  /*   onPage(array: Array<any>, pageSize: number, pageNumber: number) { */
  onPage(lista: Array<any>, pageSize: number, pageNumber: number) {
    return lista.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  onListPages() {
    for (let i =0; i < this.numberPages; i++) {
      this.listPages[i] = i;
    }
  }
  nextPage() {
    if (this.numberPages > this.pageNumber) {
      this.pageNumber++;
    }
    this.pagination = this.onPage(this.lista, this.pageSize, this.pageNumber);
    console.log(this.pageNumber);
  }
  previusPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
    }
    this.pagination = this.onPage(this.lista, this.pageSize, this.pageNumber);
    console.log(this.pageNumber);
  }
  onPageNumber(aux:number){
    this.onPage(this.lista, this.pageSize, aux);
    console.log(aux);
  }
  addOne(event: Event){
    this.aux=parseInt((<HTMLButtonElement>event.target).value);
    console.log(this.aux);
    this.pagination = this.onPage(this.lista, this.pageSize, this.aux);
  }
  pagination = this.onPage(this.lista, this.pageSize, this.pageNumber);
}
