import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  userId!: number;
  newTodo: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.userId = +userId;
      this.getTodos(this.userId);
    }
  }

  getTodos(id: number): void {
    this.apiService.getTodos(id).subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  toggleTodoCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      const newTodo: Todo = {
        userId: this.userId,
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false,
      };
      this.todos.unshift(newTodo);
      this.newTodo = '';
    }
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
