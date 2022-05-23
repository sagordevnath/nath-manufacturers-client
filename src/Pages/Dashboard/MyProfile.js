import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleUpdate = event => {
        
    }
    return (
        <>
        <h1 className="text-center text-3xl text-primary">My Profile</h1>
    <div class="card lg:card-side bg-base-100 shadow-xl">
        
  <figure><div class="card-body">
  <h1 className="text-center text-3xl text-primary">Profile</h1>
    <h2 class="card-title">{user.displayName}</h2>
    <p>Email: {user.email}</p>    
    <p>Education: {user.email}</p>    
    <p>Location: {user.email}</p>    
    <p>Phone Number: {user.email}</p>    
    <p>LinkedIn Profile: {user.email}</p>    
  </div></figure>
  <div class="card-body">
    <h2 class="card-title">Update Profile</h2>
    <form onSubmit={handleUpdate}>
    <p>Education: <input type="text" placeholder='Education' class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Location: <input type="email" placeholder='Location' class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Phone Number: <textarea type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>LinkedIn Profile: <input type="text" name='linkedin' placeholder='Linkedin profile link' class="input input-bordered input-success wType here" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    
    <input type="submit" value="Update Profile" />
        </form>    
  </div>
</div>
        </>
     
 
    );
};

export default MyProfile;