import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photo: Photo | undefined;
  photoId!: number;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const photoId = this.route.snapshot.paramMap.get('photoId');
    if (photoId !== null) {
      this.photoId = +photoId;
      this.getPhoto();
    }
  }

  getPhoto() {
    this.apiService.getPhoto(this.photoId).subscribe((photo) => {
      this.photo = photo;
    });
  }
  goBack() {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.router.navigate(['/users', userId, 'albums']);
  }
}
