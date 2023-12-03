import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    // console.log("this.state", this.state);
    // set state form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQuantity = () => {
    // console.log("this.state", this.state);
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    const { title, price, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}> Rs {price}</div>
          <div style={{ color: "#777" }}> Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* button  */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
            />
          </div>
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
