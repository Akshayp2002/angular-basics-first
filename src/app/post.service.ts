import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

// headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  http = inject(HttpClient);


  getPosts() {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }


  private handleError(error:any) {
    return throwError(()=> new Error('Something went Wrong'));
  }

  getPost(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post,httpOptions)
  }

  updatePost(post: any) {
    return this.http.put(this.apiUrl + '/' + post.id, post)
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + '/' + id)
  }


  getPostWithParams(userId:number){
    let params = new HttpParams().set('userId',userId);
    return this.http.get(this.apiUrl,{params});
  }


}
