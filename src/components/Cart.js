import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from '../redux/action/index';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart);

  const handleIncreaseQty = (item) => {
    dispatch(addCart(item));
  };

  const handleDecreaseQty = (item) => {
    dispatch(delCart(item));
  };

  const calculateTotalPrice = (item) => {
    return (item.qty * item.price).toFixed(2);
  };

  const calculateOverallTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="row mb-3 py-5 " key={item.id}>
              <div className="col-md-3">
                <img src={item.image} alt={item.title} className="img-fluid mb-5"  width="200px"/>
              </div>
              <div className="col-md-9 ">
              <p className='text-uppercase text-black-50'>{item.category}</p>
              <h1 className='display-5'>{item.title}</h1>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>
                  Quantity: {item.qty}
                  <button className="btn btn-outline-dark ms-2" onClick={() => handleIncreaseQty(item)}>+</button>
                  <button className="btn btn-outline-dark ms-2" onClick={() => handleDecreaseQty(item)}>-</button>
                </p>
                <p>Total Price: ${calculateTotalPrice(item)}</p>
              </div>
              <hr></hr>
            </div>
          ))}
          <div className="mt-3">
            <h4>Overall Total: ${calculateOverallTotalPrice()}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
