import React, { Component } from "react";
class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
        this.createTasks = this.createTasks.bind(this);
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }

   createTasks(item) {
    return <div key={item.key}>
      <input value={item} type="checkbox"  Defaultchecked={this.state.isChecked}
          onChange={this.toggleChange}/>
      <span> {item.text} </span>
      <span><button id="button" onClick={() => this.delete(item.key)}>Delete Task</button></span>
      </div>
   }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
        <div>
            {listItems}
        </div>
    );
  }
};
 
export default TodoItems;