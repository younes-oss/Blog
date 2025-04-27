import { Injectable } from '@angular/core';
import { collectionData, collection, addDoc, Firestore } from '@angular/fire/firestore';
import { Comment } from '../../comment/comment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private firestore: Firestore) {}

  // Get comments from Firestore
  getComments(): Observable<Comment[]> {
    const commentsRef = collection(this.firestore, 'comments');
    return collectionData(commentsRef, { idField: 'id' }) as Observable<Comment[]>;
  }

  // Add a new comment
  addComment(comment: Comment): Promise<void> {
    const commentsRef = collection(this.firestore, 'comments');
    return addDoc(commentsRef, comment).then(() => {
      console.log('Comment added successfully');
    });
  }
}
