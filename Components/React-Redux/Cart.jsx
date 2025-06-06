import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from './CartSlice'; 


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return <div className='text-white d-flex justify-content-center align-items-center'>Your cart is empty</div>;
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div>
      <h1 className='text-white'>Your Cart</h1>
      <p className='text-white'>Total items: {cartCount}</p>
      <p className='text-white'>Total price: ${totalPrice.toFixed(2)}</p>
      <div className="container text-center">
        <div className="row">
          {cartItems.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title text-white">
                    {item.name} - {item.price.toFixed(2)}
                  </h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(item)} 
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
// {item.name} - ${item.price.toFixed(2)} 
