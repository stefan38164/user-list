import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDefaultModel } from '../models/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: UserDefaultModel[] = [];
  userId!: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.userId = +userId;
      this.getAlbums(this.userId);
    }
  }
  getAlbums(id:number) {
    this.apiService.getAlbums(id).subscribe((albums:UserDefaultModel[]) => {
      this.albums = albums;
    });
  }
}
