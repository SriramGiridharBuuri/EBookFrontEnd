import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../Book-Service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createBook1: Book = new Book();
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveBook() {
    this.bookService.createBook(this.createBook1).subscribe(
      (data) => {
        console.log(data);
        alert("Book created ")
        this.goToBookList();
      },
    //  (error) => console.log(error)
    );
  }

  goToBookList(): void {
    this.router.navigate(['/booksList']);
  }

  onSubmit() {
    console.log(this.createBook1);
  //  alert('Book created successfully');
    this.saveBook();
    // this.goToBookList();
  }
}

