import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div>Title</div>
          <div>Rs: 999</div>
          <div>Qt: 2</div>
          <div className="cart-item-actions">{/* Buttons */}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadious: 4,
  },
};

export default CartItem;
