import React from "react";
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id,  name, description, img, minimumOrderQuantity, availableQuantity, price } = product;
  const navigate = useNavigate();

  const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`);
    }
  return (
    <div  className="card bg-green-200 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>        
        <p>Price: ${price}</p>        
        <p>Minimum Order Quantity: {minimumOrderQuantity}</p>        
        <p>Available Quantity: {availableQuantity}</p>        
        <div className="card-actions">
          <button  onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
