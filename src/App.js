import React, { Component } from "react";

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
          <button onClick={() => this.addItem()}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default App;
