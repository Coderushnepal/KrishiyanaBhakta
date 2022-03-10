import React from "react";
import List from "./List";
import Welcome from "./Welcome";
import SpeedIndicator from "./SpeedIndicator";
import Click from "./Click";
import Hover from "./Hover";
import Calculator from "./Calculator";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ["Apple", "Banana", "Mango", "Grapes"],
    };

    this.handleListAdd = this.handleListAdd.bind(this);
  }

  handleListAdd() {
    const enteredFruit = prompt("Enter the name of fruit");

    if (!enteredFruit) {
      return;
    }

    this.setState({ list: [...this.state.list, enteredFruit] });
  }

  render() {
    return (
      <React.Fragment>
        <Welcome name="World" />
        <SpeedIndicator />
        <h1>Number of fruits = {this.state.list.length} </h1>

        <List list={this.state.list} onAdd={this.handleListAdd} />
        <Click />
        <Hover />

        <Calculator />
      </React.Fragment>
    );
  }
}


export default App;