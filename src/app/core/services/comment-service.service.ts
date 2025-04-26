import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  constructor(private firestore: Firestore) {}

  addComment(comment: { name: string; text: string; email: string; timestamp: Date }) {
    const commentRef = collection(this.firestore, 'comments');
    return addDoc(commentRef, comment);
  }
}

