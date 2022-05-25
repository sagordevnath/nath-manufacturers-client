import React from 'react';
import { FaFlagCheckered } from "react-icons/fa";
import {  FaTv } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa";
import {  FaRegThumbsUp } from "react-icons/fa";
import './BusinessSummary.css';

const BusinessSummary = () => {    
    return (
        <div>
            <h1>Millions Business Trust Us</h1>
            <h1>Try to understand user expectations</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10' >
            <div className="card bg-base-100">
  <figure className=" px-10 pt-10">
  
 <FaFlagCheckered className='Icons' />

  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">86</h2>
    <p>Countries</p>    
  </div>
</div>
<div className="card bg-base-100">
  <figure className="px-10 pt-10">
    <FaTv className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">600+</h2>
    <p>Complete Project</p>    
  </div>
</div>
<div className="card bg-base-100">
  <figure className="px-10 pt-10">
  <FaUsers className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">273+</h2>
    <p>Happy Clients</p>    
  </div>
</div>
<div className="card bg-base-100">
  <figure className="px-10 pt-10">
  <FaRegThumbsUp className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">630+</h2>
    <p>Feedback</p>    
  </div>
</div>
            </div>
        </div>
    );
};

export default BusinessSummary;