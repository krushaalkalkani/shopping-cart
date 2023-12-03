import React from "react";
import Cart from "./Cart";
import Navbar from "./Navabar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 10999,
          qty: 15,
          img: "https://m.media-amazon.com/images/I/41Rkxw78fIL._SX300_SY300_QL70_FMwebp_.jpg",
          id: 1,
        },
        {
          title: "Smart Watch",
          price: 345,
          qty: 5,
          img: "https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UL640_FMwebp_QL65_.jpg",
          id: 2,
        },
        {
          title: "Laptop",
          price: 39455,
          qty: 1,
          img: "https://m.media-amazon.com/images/I/51KL3aOZ0tL._AC_UY436_FMwebp_QL65_.jpg",
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
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
