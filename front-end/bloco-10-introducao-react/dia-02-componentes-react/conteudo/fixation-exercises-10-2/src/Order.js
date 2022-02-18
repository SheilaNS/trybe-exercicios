import React from "react";

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.curerncy} </p>
      </div>
    )
  }
}

export default Order;