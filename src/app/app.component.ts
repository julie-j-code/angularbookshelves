import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularbookshelves';


  constructor() {
    const config = {
      // apiKey: 'AIzaSyCwfa_fKNCVrDMR1E88S79mpQP-6qertew4',
      // authDomain: 'bookshelves-3d570.firebaseapp.com',
      // databaseURL: 'https://bookshelves-3d570.firebaseio.com',
      // projectId: 'bookshelves-3d570',
      // storageBucket: 'bookshelves-3d570.appspot.com',
      // messagingSenderId: '6634573823'
      apiKey: "AIzaSyC5KFSIBr2B0iYgNWkNIOZ1oLqV-bIYP4Q",
      authDomain: "bookshelf-363ff.firebaseapp.com",
      databaseURL: "https://bookshelf-363ff-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bookshelf-363ff",
      storageBucket: "bookshelf-363ff.appspot.com",
      messagingSenderId: "466923998798"
    };
    firebase.initializeApp(config);
  }


}
