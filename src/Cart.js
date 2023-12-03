import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 999,
          qty: 1,
          img: "",
          id: 1,
        },
        {
          title: "Watch",
          price: 345,
          qty: 1,
          img: "",
          id: 2,
        },
        {
          title: "Blek",
          price: 34,
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("hey Increase the quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("hey Decrease the quantity", product);
    const { products } = this.state;
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    const index = products.indexOf(product);

    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
