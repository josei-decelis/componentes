import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }
  getPostsById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiUrl + id);
  }
  savePost(title: string, body: string, userId: number) {
    return this.httpClient.post(this.apiUrl, {
      title: title,
      body: body,
      userId: userId,
    });
  }
}
