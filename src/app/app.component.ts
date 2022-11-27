import { Component } from '@angular/core';
// import * as firebase from 'firebase';  en haut du fichier, mettant à disposition la méthode  initializeApp() ) :
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularbookshelves';


  constructor() {
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5KFSIBr2B0iYgNWkNIOZ1oLqV-bIYP4Q",
  authDomain: "bookshelf-363ff.firebaseapp.com",
  databaseURL: "https://bookshelf-363ff-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookshelf-363ff",
  storageBucket: "bookshelf-363ff.appspot.com",
  messagingSenderId: "466923998798",
  appId: "1:466923998798:web:e0927920881e00b467fd1f"
}
    firebase.initializeApp(firebaseConfig);


  }


}
