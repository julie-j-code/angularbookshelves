import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';
// attention à la syntaxe !
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();
  bookEl:any;

  constructor() {
    this.getBooks();
}

  emitBooks() {
    this.booksSubject.next(this.books);
  }

  // méthode mise à disposition par Firebase pour enregistrer la liste sur un node de la base de données — la méthode  set()
  // La méthode  ref()  retourne une référence au node demandé de la base de données, et  set()  fonctionne plus ou moins comme  put()  pour le HTTP : il écrit et remplace les données au node donné.
  saveBooks() {
    firebase.database().ref('/books').set(this.books);
}

getBooks() {
  firebase.database().ref('/books')
    .on('value', (data: DataSnapshot) => {
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      }
    );
}

getSingleBook(id: number) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/books/' + id).once('value').then(
        (data: DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}


createNewBook(newBook: Book) {
  this.books.push(newBook);
  this.saveBooks();
  this.emitBooks();
}

removeBook(book: Book) {
  const bookIndexToRemove = this.books.findIndex(
    (bookEl) => {
      if(bookEl === book) {
        return true;
      }
      // obligée de rajouter pour l'erreur "not all code paths return a value"?
      else return bookEl;
    }
  );
  this.books.splice(bookIndexToRemove, 1);
  this.saveBooks();
  this.emitBooks();
}


}
