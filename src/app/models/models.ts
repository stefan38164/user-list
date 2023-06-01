export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface UserDefaultModel {
  id: number;
  title: string;
}

export interface User extends UserDefaultModel {
  name: string;
}

export interface Todo extends UserDefaultModel {
  userId: number;
  completed: boolean;
}

export interface SinglePost extends UserDefaultModel {
  body: string;
}

export interface Comment extends SinglePost, User {}

export interface Photo extends UserDefaultModel {
  albumId: number;
  url: string;
  thumbnailUrl: string;
}
