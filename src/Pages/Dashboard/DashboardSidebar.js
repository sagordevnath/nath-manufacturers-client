import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div class='drawer drawer-mobile mt-16 bg-accent'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center '>
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl text-primary font-bold'>Welcome to Dashboard</h1>        
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
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