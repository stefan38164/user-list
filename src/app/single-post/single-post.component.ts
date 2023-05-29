import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SinglePost, Comment } from '../data';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: SinglePost | undefined;
  comments: Comment[] = [];
  postId!: number;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('postId');

    if (userId !== null) {
      this.postId = +userId;
      this.getPost();
      this.getComments();
    }
  }

  getComments() {
    this.apiService.getPostComments(this.postId).subscribe((comments) => {
      this.comments = comments;
    });
  }
  getPost() {
    this.apiService.getSinglePost(this.postId).subscribe((post) => {
      this.post = post;
    });
  }

  goBack() {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.router.navigate(['/users', userId, 'posts']);
  }
}
