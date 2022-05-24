import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
    return (
      <div class='drawer drawer-mobile mt-16 bg-accent'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center '>
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl text-primary font-bold'>Welcome to Dashboard</h1>        
        <Outlet></Outlet>
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          <li><NavLink index to='/dashboard/my-profile'>My Profile</NavLink></li>
          {(user && !admin) && <>
              <li><NavLink to='/dashboard/my-order'>My Order</NavLink></li>
              <li><NavLink to='/dashboard/add-review'>Add a Review</NavLink></li>
          </>}
          { admin && <>
              <li><NavLink to="/dashboard/manage-all-orders">Manage All Orders</NavLink></li>
              <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
              <li><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
              <li><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>
          </>}
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;