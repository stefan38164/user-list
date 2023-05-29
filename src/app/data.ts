export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface BaseItem {
  id: number;
  title: string;
}

export interface User extends BaseItem {
  name: string;
}

export interface Todo extends BaseItem {
  userId: number;
  completed: boolean;
}

export interface SinglePost extends BaseItem {
  body: string;
}

export interface Comment extends BaseItem {
  name: string;
  body: string;
}

export interface Posts extends BaseItem {}

export interface Photo extends BaseItem {
  albumId: number;
  url: string;
  thumbnailUrl: string;
}

export interface Album extends BaseItem {}
