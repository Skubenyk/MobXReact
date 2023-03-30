import { makeAutoObservable } from 'mobx';

class Todo {
  // todos = [
  //   { id: 1, title: 'Find a job in IT', completed: false },
  //   { id: 2, title: 'Learn GraphQL', completed: false },
  //   { id: 3, title: 'Learn MobX', completed: false },
  // ];
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log('remove');
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    console.log('complete');
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

// export default new Todo();

const myTodo = new Todo();

export default myTodo;
