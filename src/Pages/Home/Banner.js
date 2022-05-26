import React from 'react';
import ProductCarousel from './ProductCarousel';
import background from '../../Assets/images/front-back/front-back.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
      <>
      <div style={{
        background:`url(${background})`}} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/r0prTfC/front-top-removebg-preview.png" className="max-w-lg lg:h-screen mt-10 rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold uppercase text-white">Leader in Power and</h1>
      <h1 className="text-5xl font-bold uppercase text-success py-5">Automation technologies</h1>
      <p className="py-6 text-white">The great differentiator in business is when an organization steps out and creates value from something never tried before. We have become a white-collar workforce, and automation has become a necessity.</p>
      <PrimaryButton>Get Started</PrimaryButton>
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