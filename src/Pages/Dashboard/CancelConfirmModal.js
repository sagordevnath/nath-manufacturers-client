import React from 'react';
import { toast } from 'react-toastify';

const CancelConfirmModal = ({cancelingOrder, setCancelingOrder, orders, setOrders}) => {
    console.log(cancelingOrder);
    const {_id, productName} = cancelingOrder;
    const handleCancel = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
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
                    // refetch();
                    setOrders(orders.filter(order => order._id !== _id));
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  ${productName}!</h3>
                    <p class="py-4">If you cancelled this order, you can't get it back!</p>
                    <div class="modal-action">
                    <button onClick={() => handleCancel()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelConfirmModal;