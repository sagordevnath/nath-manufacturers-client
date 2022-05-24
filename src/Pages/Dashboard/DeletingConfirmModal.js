import React from 'react';
import { toast } from 'react-toastify';

const DeletingConfirmModal = ({deletingProduct, setDeletingProduct, products, setProducts}) => {
    const {_id, name} = deletingProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is Deleted.`)
                    setDeletingProduct(null);
                    // refetch();
                    setProducts(products.filter(product => product._id !== _id));
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete ${name}!</h3>
                    <p class="py-4">If you delete this product, you can't get it back!</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingConfirmModal;