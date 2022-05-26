import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
    return (
      <div className='drawer drawer-mobile mt-16 min-h-screen'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center '>
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl text-primary font-bold mt-5'>Welcome to Dashboard</h1>        
        <Outlet></Outlet>
      </div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-slate-400 text-base-content'>
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