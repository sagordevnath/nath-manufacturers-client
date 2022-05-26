import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://intense-brook-66546.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const removeUser = () => {
        fetch(`https://intense-brook-66546.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to remove User');
                }
                return res.json()})
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully remove User`);
                }

            })
    }
    return (   
        <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td>
                {role === 'admin'? <button className="btn btn-xs" disabled>Remove User</button>:
                <button onClick={removeUser} className="btn btn-xs">Remove User</button>}
                </td>
        </tr>
        
    );
};

export default UserRow;