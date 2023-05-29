import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  userId!: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId !== null) {
      this.userId = +userId;
      this.getAlbums();
    }
  }
  getAlbums() {
    this.apiService.getAlbums(this.userId).subscribe((albums) => {
      this.albums = albums;
    });
  }
}
