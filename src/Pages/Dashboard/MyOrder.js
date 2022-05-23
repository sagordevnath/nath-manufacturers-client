// import React, { useState, useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyOrder = () => {
// const [orders, setOrders] = useState([]);
const [user] =useAuthState(auth);

const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
        method: 'GET',
        headers:{
            'content-type': 'application/json'
        }
    }).then(res => res.json()));    
    if (isLoading) {
        return <Loading></Loading>
    }

// useEffect(() => {
//     fetch(`http://localhost:5000/order?userEmail=${user.email}`)
//     .then(res => res.json())
//     .then(data => setOrders(data))
// }, [user]);
    return (
        <div>
            <h1 className='text-2xl '>This is my order: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price/per</th>
                            <th>Quantity</th>
                            <th>Orders Name</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                <div class="w-8 rounded">
                                    <img src={a.img} alt={a.name} />
                                </div>
                            </div></td>
                                <td>{a.productName}</td>
                                <td>{a.price}</td>
                                <td>{a.quantity}</td>
                                <td>{user.displayName}</td>
                                <td>
                                <Link to='/'><button className='btn btn-xs btn-success'>Cancel</button></Link>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;