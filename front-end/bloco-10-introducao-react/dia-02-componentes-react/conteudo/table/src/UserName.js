import React, { Component } from 'react';
import './UserName.css';
import PropTypes from 'prop-types';

class UserName extends Component {
  render() {
    const name = this.props.name;
    return (<span className='nome'>{name}</span>);
  }
}

UserName.propTypes = {
  name: PropTypes.string,
}

UserName.defaultProps = {
  name: 'Stranger',
}

export default UserName;