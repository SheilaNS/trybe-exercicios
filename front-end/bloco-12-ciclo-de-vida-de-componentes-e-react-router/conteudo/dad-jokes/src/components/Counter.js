import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // essa função mostra o futuro do state e do props
    console.log("shouldComponentUpdate", this.state, nextState);
    console.log("shouldComponentUpdate", this.state.counter, nextState.counter);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // essa função mostra o passado do state e do props
    console.log("componentDidUpdate", this.state, prevState);
    console.log("componentDidUpdate", this.state.counter, prevState.counter);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;