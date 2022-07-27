import React, { Component } from "react";
import TodoItems from "./TodoItems";
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

     addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };

          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }      
        e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

      
      handleReset = () => {
        this.setState({
          items: []
        });
        this._inputElement.value = "";
      };

  render() {
    return ( 
        <div>
        <center>
        <h1>TodoList</h1>
          <form onSubmit={this.addItem}>
            <input class="input" ref={(a) => this._inputElement = a} placeholder="enter task">   
            </input>
            <button id="button" type="submit">Add Task</button>
          </form></center> 
          <TodoItems entries={this.state.items} delete={this.deleteItem}/>   
          <center><button id="button" onClick={this.handleReset}>Reset List</button></center>
        </div>   
    );
  }
}
 
export default TodoList;