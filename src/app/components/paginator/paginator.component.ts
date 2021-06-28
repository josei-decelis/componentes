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
