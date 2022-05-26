import React from 'react';

const UpcomingProduct = () => {
    return (
        <div>
          <h1 className='text-2xl uppercase text-center text-primary font-bold'>Our Upcoming Parts</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/nMtST2M/upcoming1-1.jpg" alt="Droon" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Droon</h2>    
  </div>
</div>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/FhZPCxd/upcoming2.jpg" alt="4R Cirkit" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">4R Cirkit</h2>    
  </div>
</div>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/jDK19sm/upcoming3.jpg" alt="CC camera" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">CC camera</h2>    
  </div>
</div>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/5c4VFrP/upcoming4.jpg" alt="10Xl Engine" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">10Xl Engine</h2>    
  </div>
</div>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/nChTLkj/upcoming5.jpg" alt="Weighter" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Weighter</h2>    
  </div>
</div>
        <div className="card">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/jJtcgc3/upcoming6.jpg" alt="Eye Glass" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Eye Glass</h2>    
  </div>
</div>
            
        </div>
        </div>
    );
};

export default UpcomingProduct;