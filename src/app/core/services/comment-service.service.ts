import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';  // Import 'from' from rxjs

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private firestore: AngularFirestore) {}

  // Fetch comments from Firestore
  getComments(): Observable<any[]> {
    return this.firestore.collection('comments').valueChanges();
  }

  // Add a new comment to Firestore and convert the promise to an observable
  addComment(commentData: any): Observable<any> {
    return from(this.firestore.collection('comments').add(commentData));  // Convert Promise to Observable
  }
}
