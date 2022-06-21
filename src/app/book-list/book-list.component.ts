import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../Book-Service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  book: Book[] = [];
  nameSearch: string = '';
  

  ngOnInit(): void {
    this.getBooksList();
  }

 
  private getBooksList() {
    this.bookService.getBooksList().subscribe((data) => {
      this.book = data;
    });
  }
}
