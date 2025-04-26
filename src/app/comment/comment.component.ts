import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../core/services/comment-service.service';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { CommonModule } from '@angular/common';
// Ensure this service exists

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  imports: [
    FormsModule,
    DatePipe,
    CommonModule
  ],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any[] = [];  // To store fetched comments
  newComment = {
    name: '',
    email: '',
    text: ''
  };  // For the new comment form

  constructor(private commentService: CommentServiceService) {}

  ngOnInit(): void {
    this.loadComments();  // Fetch comments when component initializes
  }

  loadComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  postComment(commentForm: any): void {
    if (commentForm.valid) {
      const commentData = {
        ...this.newComment,
        timestamp: new Date()  // Add timestamp for new comment
      };
      this.commentService.addComment(commentData).subscribe(() => {
        this.comments.push(commentData);  // Add the new comment to the list
        this.newComment = { name: '', email: '', text: '' };  // Reset the form fields
        commentForm.resetForm();  // Reset the form
      });
    }
  }
}
