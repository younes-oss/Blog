import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../core/services/comment-service.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Comment } from './comment.interface'; // تأكد من المسار الصحيح!

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
  ],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];  // Type-safe array
  newComment: Partial<Comment> = { name: '', email: '', text: '' }; // Use Partial for optional timestamp

  constructor(private commentService: CommentServiceService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  postComment(commentForm: any): void {
    if (commentForm.valid) {
      const commentData: Comment = {
        name: this.newComment.name || '',
        email: this.newComment.email || '',
        text: this.newComment.text || '',
        timestamp: new Date()
      };

      this.commentService.addComment(commentData).then(() => {
        this.comments.push(commentData);
        this.newComment = { name: '', email: '', text: '' };
        commentForm.resetForm();
      }).catch(error => {
        console.error('Error adding comment:', error);
      });
    }
  }
}
