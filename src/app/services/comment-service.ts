import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentDto } from '../methods/comment-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: BehaviorSubject<CommentDto[]> = new BehaviorSubject<CommentDto[]>([]);

  constructor() {}

  addComment(comment: CommentDto): void {
    const currentComments = this.comments.getValue();
    const updatedComments = [...currentComments, comment];
    this.comments.next(updatedComments);
  }

  getComments(): Observable<CommentDto[]> {
    return this.comments.asObservable();
  }

  getCommentsByTaskId(taskId: number): CommentDto[] {
    const currentComments = this.comments.getValue();
    return currentComments.filter(comment => comment.taskId === taskId);
  }
}
