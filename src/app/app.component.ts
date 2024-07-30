import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { PostService } from './post.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextcomponentComponent, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  postServive = inject(PostService)
  posts: any[] = [];

  constructor() {
    this.postServive.getPostWithParams(1).subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addPost() {
    this.postServive.updatePost({title: 'Akshay', body: 'test body' }).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }




}

// export class AppComponent implements OnInit{

// httpClient = inject(HttpClient);

// data:any[] = [];

// ngOnInit(): void {
//   this.fetchData()
// }

// fetchData(){
//   this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data:any)=>{
//     console.log(data);
//     this.data= data;
//   })

// }

// }
