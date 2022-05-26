import React from 'react';
import ProductCarousel from './ProductCarousel';

const Banner = () => {
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/r0prTfC/front-top-removebg-preview.png" className="max-w-md rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold uppercase">Leader in Power and</h1>
      <h1 className="text-5xl font-bold uppercase">Automotion technologies</h1>
      <p className="py-6">The great differentiator in business is when an organization steps out and creates value from something never tried before. We have become a white-collar workforce, and automation has become a necessity.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
{/* <div className='mx-auto'>
<ProductCarousel></ProductCarousel>
</div> */}
      </>
    );
};

export default Banner;