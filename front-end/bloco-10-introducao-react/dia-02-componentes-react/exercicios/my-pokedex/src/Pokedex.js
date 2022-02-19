import React, { Component } from "react";
import pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      pokemons.map((elem) => <Pokemon poke={elem} key={elem.id} />)
    );
  }
}

export default Pokedex;