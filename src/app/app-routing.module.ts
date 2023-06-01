import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { PhotoComponent } from './photo/photo.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:userId/albums', component: AlbumsComponent },
  { path: 'users/:userId/todos', component: TodosComponent },
  { path: 'users/:userId/posts', component: PostsComponent },
  { path: 'users/:userId/posts/:postId', component: SinglePostComponent },
  { path: 'users/:userId/albums/:albumId/photos/:photoId',component: PhotoComponent,},
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
