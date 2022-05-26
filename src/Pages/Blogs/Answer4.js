import React from "react";
import answer from '../../Assets/images/answer/Capture.PNG'

const Answer4 = () => {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content my-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
          You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
          </h2>
          
          <p>You can use the .filter() method to filter the array by name.</p>
          <img src={answer} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default Answer4;
