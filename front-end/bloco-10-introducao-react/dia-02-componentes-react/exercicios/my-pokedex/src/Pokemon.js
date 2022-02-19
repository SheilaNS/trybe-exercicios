import React, { Component } from "react";
import PropTypes from "prop-types";
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="pokemon">
        <section className="poke-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weight: {value} {measurementUnit}</p>
        </section>
        <section className="poke-img">
          <img src={image} alt="Pokemon gif" />
        </section>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
}

export default Pokemon;