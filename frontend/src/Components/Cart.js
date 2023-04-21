import { useState, useEffect } from "react";
import axios from "axios";
import './Cart.css'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, product: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, product: 'Product 2', price: 19.99, quantity: 1 },
    { id: 3, product: 'Product 3', price: 7.99, quantity: 4 },
  ]
  );

  useEffect(() => {
    // const fetchCart = async () => {
    //   try {
    //     const response = await axios.get("API_ENDPOINT/cart");
    //     setCart(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchCart();
  }, []);

  const handleRemove = (productId) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    setCart(newCart);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const handleCheckout = () => {
    // navigate to payment page
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="product-info">
              <img src={item.product.image} alt={item.product.name} />
              <div className="product-details">
                <h3>{item.product.name}</h3>
                <p>Price: {item.product.price}</p>
              </div>
            </div>
            <div className="quantity-control">
              <button
                onClick={() =>
                  handleQuantityChange(
                    item.product.id,
                    item.quantity - 1
                  )
                }
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  handleQuantityChange(
                    item.product.id,
                    item.quantity + 1
                  )
                }
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemove(item.product.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
