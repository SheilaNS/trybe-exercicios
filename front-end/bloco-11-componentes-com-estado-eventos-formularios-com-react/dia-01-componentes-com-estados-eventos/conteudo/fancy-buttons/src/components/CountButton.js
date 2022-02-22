import React, { Component } from "react";

class CountButton extends Component {
  constructor() {
    super();
    this.handleCountNumb = this.handleCountNumb.bind(this);
    this.state = {
      clickNumber: 0,
    }
  }

  handleCountNumb(event) {
    this.setState((beforeNumb) => (
      {
        clickNumber: beforeNumb.clickNumber + 1,
      }
      ), () => {
        if (this.state.clickNumber % 2 === 0) {
          console.log('verde');
          event.target.style.backgroundColor = 'green';
        } else {
          console.log('vermelho');
          event.target.style.backgroundColor = 'red';
        }
      })
  }

  render() {
    return(
      <button onClick={this.handleCountNumb}>{this.state.clickNumber}</button>
    );
  }
}

export default CountButton;