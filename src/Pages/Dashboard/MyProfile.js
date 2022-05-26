import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const email = useParams();

    const { data: userInfo, isLoading } = useQuery('users', () => fetch(`https://intense-brook-66546.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(user)
    

    const handleUpdate = event => {
        // const email = user.email; 
        
        
        const userInfo = {
            
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedIn: event.target.linkedIn.value
        }     
        

        fetch(`https://intense-brook-66546.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
        .then(data => {
            console.log(userInfo);
            toast.success('Profile Updated successfully');
            // empty input
            
            event.target.address.value = '';
            event.target.phone.value ='';
        })
    }


    return (
        <>
        <h1 className="text-center text-3xl text-primary mb-10">My Profile</h1>
    {/* <div className="card lg:card-side bg-base-100 shadow-xl"> */}
        
  <figure><div className="card-body shadow-xl ">
  <h1 className="card-title text-center text-3xl text-primary mb-6">Profile</h1>
    <h2 className="card-title">Name: {user.displayName}</h2>
    <p>Email: {user.email}</p>    
    <p>Education: {userInfo?.education}</p>    
    <p>Location: {userInfo?.location}</p>    
    <p>Phone Number: {userInfo?.phone}</p>    
    <p>LinkedIn Profile: {userInfo?.linkedIn}</p>    
  </div></figure>
  <div className="card-actions justify-center">
                    <label
                        htmlhtmlFor="booking-modal"                        
                        className="btn btn-sm btn-secondary mt-5 text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Update Profile</label>
                </div>
                <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlhtmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Update Form</h3>
                    <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                        
                        <input type="text" name="education" placeholder='Education' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="location" placeholder='Location' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="linkedIn" placeholder="LinkedIn Profile Link" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
  {/* <div className="divider lg:divider-horizontal">OR</div> 
  <div className="card-body">
    <h2 className="card-title text-center text-3xl text-primary mb-6">Update Profile</h2>
    <form onSubmit={handleUpdate}>
    <p>Education: <input type="text" name="education" placeholder='Education' className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Location: <input type="text" name="location" placeholder='Location' className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Phone Number: <textarea type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>LinkedIn Profile: <input type="text" name='linkedIn' placeholder='Linkedin profile link' className="input input-bordered input-success wType here" className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    
    <input type="submit" value="Update Profile" />
        </form>    
  </div> */}
{/* </div> */}
        </>
     
 
    );
};

export default MyProfile;