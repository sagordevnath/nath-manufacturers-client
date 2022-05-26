import React, { useState, useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelConfirmModal from './CancelConfirmModal';


const MyOrder = () => {
const [orders, setOrders] = useState([]);
const [user] =useAuthState(auth);
const [cancelingOrder, setCancelingOrder] =useState(null);


useEffect(() => {
    fetch(`https://intense-brook-66546.herokuapp.com/order?userEmail=${user.email}`, {
        method: 'GET',
        headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => setOrders(data))
}, [user]);
    return (
        <div>
            <h1 className='text-2xl '>This is my order: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                <div className="w-8 rounded">
                                    <img src={order.img} alt={order.productName} />
                                </div>
                            </div></td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{user.displayName}</td>
                                <td>
                                {order.paid ?<label onClick={() => setCancelingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mr-5">Pending</label>
                                :<label onClick={() => setCancelingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mr-5">Cancel</label>}
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {cancelingOrder && <CancelConfirmModal
                cancelingOrder={cancelingOrder}
                setOrders={setOrders}
                orders={orders}
                setCancelingOrder={setCancelingOrder}
            ></CancelConfirmModal>}
        </div>
    );
};

export default MyOrder;