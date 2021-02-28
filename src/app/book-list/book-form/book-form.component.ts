// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-book-form',
//   templateUrl: './book-form.component.html',
//   styleUrls: ['./book-form.component.scss']
// })
// export class BookFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;
  // et pour que le service d'upload fonctionne
  fileIsUploading = false;
  fileUrl!: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

// méthode qui permettra de lier le  <input type="file">  (que vous créerez par la suite) à la méthode  onUploadFile()  :

  detectFiles(event:any) {
    this.onUploadFile(event.target.files[0]);
}

  // méthode qui déclenchera  uploadFile()  et qui en récupérera l'URL retourné :
  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      //
      (url:any) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
}

//   onSaveBook() {
//     const title = this.bookForm.get('title')!.value;
//     const author = this.bookForm.get('author')!.value;
//     const synopsis = this.bookForm.get('synopsis')!.value;
//     const newBook = new Book(title, author);
//     newBook.synopsis = synopsis;
//     this.booksService.createNewBook(newBook);
//     this.router.navigate(['/books']);
//   }
// }

onSaveBook() {
  const title = this.bookForm.get('title')!.value;
  const author = this.bookForm.get('author')!.value;
  const synopsis = this.bookForm.get('synopsis')!.value;
  const newBook = new Book(title, author);
  newBook.synopsis = synopsis;
  if(this.fileUrl && this.fileUrl !== '') {
    newBook.photo = this.fileUrl;
  }
  this.booksService.createNewBook(newBook);
  this.router.navigate(['/books']);
}
}
