import React from "react";
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id,  name, description, img, minimumOrderQuantity, availableQuantity, price } = product;
  const navigate = useNavigate();

  const navigateToPurchase = id =>{
        navigate(`/product/${id}`);
    }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>        
        <p>Price: ${price}</p>        
        <p>Minimum Order Quantity: {minimumOrderQuantity}</p>        
        <p>Available Quantity: {availableQuantity}</p>        
        <div class="card-actions">
          <button  onClick={() => navigateToPurchase(_id)} class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
