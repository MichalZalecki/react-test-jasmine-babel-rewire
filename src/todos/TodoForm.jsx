import React from "react";

export class TodoForm extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    event.preventDefault();
    const text = this.refs.todoText.value;
    const todo = {text};
    this.props.addTodo(todo);
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit} className="todoForm">
        <input
          type="text"
          name="todoText"
          className="todoText"
          ref="todoText"
        />
        <input
          type="submit"
          className="todoSubmit"
        />
      </form>
    );
  }
}
