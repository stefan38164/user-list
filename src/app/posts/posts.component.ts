import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDefaultModel} from '../models/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: UserDefaultModel[] = [];
  userId!: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.userId = +userId;
      this.getPosts(this.userId);
    }
  }
  getPosts(id:number) {
    this.apiService.getPosts(id).subscribe((posts: UserDefaultModel[]) => {
      this.posts = posts;
    });
  }
}
