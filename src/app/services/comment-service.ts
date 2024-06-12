import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommentDto } from '../methods/comment-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: BehaviorSubject<CommentDto[]> = new BehaviorSubject<CommentDto[]>([]);
  private url = 'https://localhost:8080/comments';

  constructor(private http: HttpClient) {}

  addComment(comment: CommentDto): Observable<CommentDto> {
    return this.http.post<CommentDto>(this.url, comment);
  }

  fetchCommentsByTaskId(taskId: number): void {
    this.http.get<CommentDto[]>(`${this.url}/task/${taskId}`).subscribe(
      (comments) => this.comments.next(comments),
      (error) => console.error('Error fetching comments', error)
    );
  }

  getComments(): Observable<CommentDto[]> {
    return this.comments.asObservable();
  }

  getCommentsByTaskId(taskId: number): CommentDto[] {
    const currentComments = this.comments.getValue();
    return currentComments.filter(comment => comment.taskId === taskId);
  }
}
