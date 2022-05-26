import React from 'react';
import { toast } from 'react-toastify';

const CancelConfirmModal = ({cancelingOrder, setCancelingOrder, orders, setOrders}) => {
    console.log(cancelingOrder);
    const {_id, productName} = cancelingOrder;
    const handleCancel = () => {
        fetch(`https://intense-brook-66546.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order ${productName} is Canceled.`)
                    setCancelingOrder(null);
                    setOrders(orders.filter(order => order._id !== _id));
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  ${productName}!</h3>
                    <p className="py-4">If you cancelled this order, you can't get it back!</p>
                    <div className="modal-action">
                    <button onClick={() => handleCancel()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelConfirmModal;