import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    newItem: "",
    list: [],
  };

  updateInput = (key, value) => {
    // update react state
    this.setState({ [key]: value });
  };

  addItem = () => {
    // create item w/ unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    // update state w/ new list and reset newItem
    this.setState({
      list,
      newItem: "",
    });
  };

  deleteItem = (id) => {
    // make coppy of current item list
    const list = [...this.state.list];

    // filter out item to be deleted
    const updatedList = list.filter((item) => item.id !== id);

    // update state with new list
    this.setState({
      list: updatedList,
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          Add an item:
          <br />
          <input
            type="text"
            placeholder="To do..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <br />
          <button
            className="addButton addButton--active"
            onClick={() => this.addItem()}
          ></button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
