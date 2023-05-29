import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Posts } from '../data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  userId!: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId !== null) {
      this.userId = +userId;
      this.getPosts();
    }
  }
  getPosts() {
    this.apiService.getPosts(this.userId).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
