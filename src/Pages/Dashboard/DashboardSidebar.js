import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className='drawer drawer-mobile mt-16 bg-accent'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center '>
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl text-primary font-bold'>Welcome to Dashboard</h1>        
      </div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          <li>
            <NavLink to='/dashboard/my-order'>My Order</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/add-review'>Add a Review</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;