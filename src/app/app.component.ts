import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const data = localStorage.getItem("todos");
    if (data !== '' && data !== null){
      this.todos =JSON.parse(data);
    }
  }

  todos = [
    {todo: "einkaufen", done: false},
    {todo: "lesen", done: false},
    {todo: "fischen", done: true}
  ];

  newTodo= "";

  setTodo(event: KeyboardEvent){
    this.newTodo = (event.target as HTMLInputElement).value
  }

  addTodo(){
    if (this.newTodo.trim() !== ""){
      this.todos.push({todo: this.newTodo, done: false})
    }
    this.storeTodos()
  }

  countOpenTodos(){
    const done = this.todos.filter((item) => {
      return !item.done
    })
    return done;
  }

  storeTodos(){
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(index: number){
    this.todos[index].done = !this.todos[index].done;
    this.storeTodos()
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
    this.storeTodos()
  }

  title = 'hello-angular-todoapp';
}
