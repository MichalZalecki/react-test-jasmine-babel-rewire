import React from "react";
import {TodoForm} from "./todos/TodoForm";
import {TodoList} from "./todos/TodoList";
import uuid from "uuid";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addTodo(todo) {
    const id = uuid.v4();
    this.setState({ todos: [...this.state.todos, {...todo, id}] });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={ ::this.addTodo } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}
