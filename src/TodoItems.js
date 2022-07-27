import React, { Component } from "react";
import CompleteItem from "./CompleteItem"
class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {   
      return <div>
      <CompleteItem item={item} key={item.key}/>
      <span><button id="button" onClick={() => this.delete(item.key)}>Delete</button></span>
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