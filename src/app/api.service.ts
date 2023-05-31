import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_BASE_URL, User, UserDefaultModel, Todo, SinglePost, Comment, Photo } from './models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = API_BASE_URL;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);
  }

  getAlbums(userId: number): Observable<UserDefaultModel[]> {
    const url = `${this.baseUrl}/users/${userId}/albums`;
    return this.http.get<UserDefaultModel[]>(url);
  }

  getTodos(userId: number): Observable<Todo[]> {
    const url = `${this.baseUrl}/users/${userId}/todos`;
    return this.http.get<Todo[]>(url);
  }

  getPosts(userId: number): Observable<UserDefaultModel[]> {
    const url = `${this.baseUrl}/users/${userId}/posts`;
    return this.http.get<UserDefaultModel[]>(url);
  }

  getSinglePost(postId: number): Observable<SinglePost> {
    const url = `${this.baseUrl}/posts/${postId}`;
    return this.http.get<SinglePost>(url);
  }

  getPostComments(postId: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/posts/${postId}/comments`;
    return this.http.get<Comment[]>(url);
  }

  getPhoto(photoId: number): Observable<Photo> {
    const url = `${this.baseUrl}/photos/${photoId}`;
    return this.http.get<Photo>(url);
  }
}
