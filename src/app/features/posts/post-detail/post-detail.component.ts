import { Component } from '@angular/core';
import {CommentComponent} from '../../../comment/comment.component';

@Component({
  selector: 'app-post-detail',
  imports: [
    CommentComponent
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

}
