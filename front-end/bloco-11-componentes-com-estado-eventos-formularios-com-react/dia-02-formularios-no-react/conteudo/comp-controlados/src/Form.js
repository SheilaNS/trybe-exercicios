import React, { Component } from "react";
import Email from "./Email";
import EstadoFavorito from "./EstadoFavorito";
import "./Form.css";
import Idade from "./Idade";
import Nome from "./Nome";
import PalavraChaveFavorita from "./PalavraChaveFavorita";
import VaiComparecer from "./VaiComparecer";

class Form extends Component {
  constructor() {
    super();
    //  por estar usando uma arrow function para o handleChange, não preciso fazer o bind
    //  this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: "",
      nome: "",
      email: "",
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: "",
    };

    this.fileInput = React.createRef();
  }

  handleChange = ({ target }) => {
    // posso desestruturar o target mais uma vez se quiser
    // const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  };

  render() {
    return (
      <div>
        <h1>Formulário em React</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <Email value={this.state.email} handleChange={this.handleChange}/>
          <Nome value={this.state.nome} handleChange={this.handleChange}/>
          <Idade value={this.state.idade} handleChange={this.handleChange}/>
          <VaiComparecer value={this.state.vaiComparecer} handleChange={this.handleChange}/>
          <PalavraChaveFavorita value={this.state.palavraChaveFavorita} handleChange={this.handleChange}/>
          <label>
            Adicione um arquivo:
            <input type="file" ref={this.fileInput} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
