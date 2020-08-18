import React, { Component } from "react";
import "./todoapp.css";

export class todoapp extends Component {
  state = {
    input: "",
    items: [],
  };
  //  EVENT Perameter using for Fetching the INPUT VALUE... 🍏
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deletItem = (index) => {
    const allItems = this.state.items;

    allItems.splice(index, 1);

    this.setState({
      items: allItems,
    });
  };

  render() {
    // DESTRECTURING METHOD
    const { input, items } = this.state;

    return (
      <div className="container">
        <h1 className="h1Tag">ToDo List</h1>
        <div className="input-section">
          <input
            // DESTRECTURING METHOD Using Her
            value={input}
            onChange={this.handleChange}
            className="inputBox"
            placeholder="Add ToDo List..."
            type="text"
          />
          <button className="todoButton" onClick={this.storeItem}>
            Add List✔️
          </button>
        </div>
        <br />
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i id="iconpencil" class="fas fa-pencil-alt"></i>
              <i
              id="iconTrash"
                className="fas fa-trash-alt"
                onClick={() => this.deletItem(index)}
              ></i>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default todoapp;
