import {inject, Injectable} from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Post} from '../../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private db: Firestore = inject(Firestore);



  addPost(post : Post){
      const postRef = collection(this.db, 'posts');
      return addDoc(postRef, post).then(() => {
        console.log('post added successfully');
      });

  }
}
