import React from "react";

export class TodoItem extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id={this.props.id}>
        <label >Id: {this.props.id}</label>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
