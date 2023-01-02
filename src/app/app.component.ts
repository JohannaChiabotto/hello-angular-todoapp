import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    {todo: "einkaufen", done: false},
    {todo: "lesen", done: false},
    {todo: "fischen", done: true}
  ];

  toggleTodo(index: number){
    this.todos[index].done = !this.todos[index].done
  }

  title = 'hello-angular-todoapp';
}
