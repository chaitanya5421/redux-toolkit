import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
// import { removeFromCart } from '../redux/productactions/ProductActions'

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const [itemsIncrement, setItemIncrement] = useState(false)
  const [itemQuantities, setItemQuantities] = useState({});

  // const filterCart = new Set(cartData)
  // console.log(filterCart)

  const filterCart = cartData.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  // const handleAdd = (id) => {
  //   setItemIncrement(itemsIncrement + 1)
  // }

  const handleAdd = (id) => {
    setItemQuantities((prevQuantities) => {
      console.log(prevQuantities)
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      return updatedQuantities;
    });
  };

  return (
    <>
      <h2>Cart</h2>
      {filterCart.length > 0 ? (
        <div>
          {filterCart.map((product) => (
            <div className="row">
              <div className="col-md-4">
                <div className="border mt-2 p-2">
                  <img
                    src={product.image}
                    className="img-fluid"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center">
                  <div>
                    <button className="btn btn-danger btn-sm">-</button>
                  </div>
                  <div className="mx-2">
                    <p>{itemQuantities[product.id] || 0}</p>
                  </div>
                  <div>
                    <button className="btn btn-warning btn-sm" 
                    onClick={() => handleAdd(product.id)}
                    >+</button>
                  </div>
                </div>
                <div className="mx-2">
                    <p>Price: ${product.price}</p>
                  </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>please add some product</p>
      )}
    </>
  );
};

export default Cart;
