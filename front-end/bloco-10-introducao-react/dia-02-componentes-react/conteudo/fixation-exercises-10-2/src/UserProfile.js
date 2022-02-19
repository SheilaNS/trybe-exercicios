import React from "react";
import Image from "./Image";

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;
    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    )
  }
}

export default UserProfile;