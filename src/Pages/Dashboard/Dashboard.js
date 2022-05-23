import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
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
          <li><NavLink to='/dashboard/my-order'>My Order</NavLink></li>
          <li><NavLink to='/dashboard/add-review'>Add a Review</NavLink></li>
          <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>

          {/* { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>} */}
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;