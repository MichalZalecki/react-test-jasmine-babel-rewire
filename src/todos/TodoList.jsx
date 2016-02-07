import React from "react";
import {TodoItem} from "./TodoItem";

export class TodoList extends React.Component {
  getTodos() {
    return this.props.todos.map(todo => <li key={todo.id}><TodoItem {...todo} /></li>)
  }

  render() {
    return (
      <ul className="todoList">{this.getTodos()}</ul>
    );
  }
}
