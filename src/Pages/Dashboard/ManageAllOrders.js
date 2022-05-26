import React, { useState, useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import CancelConfirmModal from './CancelConfirmModal';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
const [user] =useAuthState(auth);
const [cancelingOrder, setCancelingOrder] =useState(null);


useEffect(() => {
    fetch("https://intense-brook-66546.herokuapp.com/allOrder", {
        method: 'GET',
        headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => setOrders(data))
}, [user]);

const shiftingOrder =() => {
    toast.success('Order successfully Shifted')
}
    return (
        <div>
            <h1 className='text-2xl tex-center my-5 '>Manage All Orders: {orders.length}</h1>
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
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                <div className="w-8 rounded">
                                    <img src={order.img} alt={order.name} />
                                </div>
                            </div></td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.userName}</td>
                                <td>
                                {order.paid ?<label onClick={shiftingOrder} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mr-5">Shift</label>
                            :<label onClick={() => setCancelingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mr-5">Cancel</label>}
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
                // refetch={refetch}
                setCancelingOrder={setCancelingOrder}
            ></CancelConfirmModal>}
        </div>
    );
};

export default ManageAllOrders;