import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";
export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} alt="product" className="img-fluid" width="60" />
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product :</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price :</span>${price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              onClick={() => decrement(id)}
              className="cart-icon text-primary"
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              onClick={() => increment(id)}
              className="cart-icon text-primary"
            />
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          onClick={() => {
            removeItem(id);
          }}
          className="text-danger cart-icon"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <stong className="text-muted">{total}</stong>
      </div>
    </div>
  );
}
