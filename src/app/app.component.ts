import { Component } from '@angular/core';
import { PostModel } from '../models/PostModel';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  template: `<h1>Posts</h1>
  <app-post *ngFor="let p of posts" [post]="p"></app-post>`,
  styles: [`h1 {background-color: silver}`]
})
export class AppComponent {
  posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
