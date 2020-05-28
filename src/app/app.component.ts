import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>
  title = 'firebaseCurso';
  constructor(firestore:AngularFirestore){
    this.items = firestore.collection('items').valueChanges();
  }
}
