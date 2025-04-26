import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommentServiceService } from '../core/services/comment-service.service';
import { Comment } from './comment.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  templateUrl: './comment.component.html',
  imports: [CommonModule, FormsModule, DatePipe],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  newComment: Comment = {
    name: '',
    email: '',
    text: '',
    timestamp: new Date()
  };

  comments: Comment[] = [];

  constructor(private commentService: CommentServiceService) {}

  postComment(form: NgForm) {
    if (form.valid) {
      const commentToAdd = { ...this.newComment, timestamp: new Date() };
      this.commentService.addComment(commentToAdd).then(() => {
        this.comments.unshift(commentToAdd);
        this.newComment = {
          name: '',
          email: '',
          text: '',
          timestamp: new Date()
        };
        form.resetForm();
      }).catch(error => {
        console.error('Error saving comment:', error);
      });
    }
  }
}
