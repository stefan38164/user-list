import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  userId!: number;
 
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId !== null) {
      this.userId = +userId;
      this.getTodos();
    }
  }

  getTodos() {
    this.apiService.getTodos(this.userId).subscribe((todos) => {
      this.todos = todos;
    });
  }

  toggleToDoCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
