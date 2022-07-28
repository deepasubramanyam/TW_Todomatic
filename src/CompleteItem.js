
import React, { Component } from "react";
class CompleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false,
    };  
  }

  handleClick() {
    this.setState({
      isCompleted: !this.state.isCompleted
    });
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let style = {
      textDecoration: this.state.isCompleted ? "line-through" : "none",
    };

    return (
      <ul style={style} onClick={this.handleClick.bind(this)}>
        {this.props.item.text}
        <button id="button" onClick={() => this.delete(this.props.item.key)}>Done/Redo</button>
      </ul>
    );
  }
};

export default CompleteItem;
