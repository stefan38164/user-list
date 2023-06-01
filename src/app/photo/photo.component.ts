import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../models/models';
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
    if (photoId) {
      this.photoId = +photoId;
      this.getPhoto(this.photoId);
    }
  }

  getPhoto(photoId: number):void {
    this.apiService.getPhoto(photoId).subscribe((photo: Photo) => {
      this.photo = photo;
    });
  }
  goBack():void {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.router.navigate(['/users', userId, 'albums']);
  }
}
