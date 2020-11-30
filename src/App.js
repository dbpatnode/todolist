import React, { Component } from "react";

class App extends Component {
  state = {
    newItem: "",
    list: [],
  };
  render() {
    return (
      <div className="App">
        <div>
          Add an item:
          <br />
          <input
            type="text"
            placeholder="Type item..."
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
