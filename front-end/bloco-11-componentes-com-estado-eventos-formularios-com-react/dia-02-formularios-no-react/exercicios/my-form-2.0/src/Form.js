import React, { Component } from "react";
import Nome from "./Nome";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
    }
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    return (
      <div>
        <h1>My Form 2.0</h1>
        <form className="form">
          <fieldset>
            <Nome value={this.state.nome} handleChange={this.handleChange}/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;