import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    

    const handleUpdate = event => {
        // const email = user.email;  
        const userInfo = {
            
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedIn: event.target.linkedIn.value
        }     
        

        fetch(`http://localhost:5000/user?userEmail=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
        .then(data => {
            console.log(userInfo);
            toast.success('Order placed successfully');
            // empty input
            
            event.target.address.value = '';
            event.target.phone.value ='';
        })
    }


    return (
        <>
        <h1 className="text-center text-3xl text-primary mb-10">My Profile</h1>
    <div class="card lg:card-side bg-base-100 shadow-xl">
        
  <figure><div class="card-body">
  <h1 className="card-title text-center text-3xl text-primary mb-6">Profile</h1>
    <h2 class="card-title">Name: {user.displayName}</h2>
    <p>Email: {user.email}</p>    
    <p>Education: {user.email}</p>    
    <p>Location: {user.email}</p>    
    <p>Phone Number: {user.email}</p>    
    <p>LinkedIn Profile: {user.email}</p>    
  </div></figure>
  <div class="divider lg:divider-horizontal">OR</div> 
  <div class="card-body">
    <h2 class="card-title text-center text-3xl text-primary mb-6">Update Profile</h2>
    <form onSubmit={handleUpdate}>
    <p>Education: <input type="text" name="education" placeholder='Education' class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Location: <input type="text" name="location" placeholder='Location' class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Phone Number: <textarea type="number" name='phone' placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>LinkedIn Profile: <input type="text" name='linkedIn' placeholder='Linkedin profile link' class="input input-bordered input-success wType here" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    
    <input type="submit" value="Update Profile" />
        </form>    
  </div>
</div>
        </>
     
 
    );
};

export default MyProfile;