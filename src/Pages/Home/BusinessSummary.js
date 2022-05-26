import React from 'react';
import { FaTools } from "react-icons/fa";
import {  FaMoneyCheckAlt } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa";
import {  FaEnvelopeOpenText } from "react-icons/fa";
import './BusinessSummary.css';

const BusinessSummary = () => {    
    return (
      <div className='my-20'>
          <h1 className='text-2xl uppercase text-center text-primary font-bold mb-10'>Business Summary</h1>
        <div>
            <h1 className='text-xl mx-6 '>Millions Business Trust Us</h1>
            <h1 className='text-xl mx-6 mb-10'>Try to understand user expectations</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10' >
            <div className="card">
  <figure className=" px-10 pt-10">
  
 <FaUsers className='Icons' />

  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">10k+</h2>
    <p className='text-xl'>Customers</p>    
  </div>
</div>
<div className="card">
  <figure className="px-10 pt-10">
    <FaMoneyCheckAlt className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">200M+</h2>
    <p className='text-xl'>Annual Revenue</p>    
  </div>
</div>
<div className="card">
  <figure className="px-10 pt-10">
  <FaEnvelopeOpenText
 className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">50K+</h2>
    <p className='text-xl'>Reviews</p>    
  </div>
</div>
<div className="card">
  <figure className="px-10 pt-10">
  <FaTools className='Icons' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">60+</h2>
    <p className='text-xl'>Parts</p>    
  </div>
</div>
            </div>
        </div>
      </div>
    );
};

export default BusinessSummary;