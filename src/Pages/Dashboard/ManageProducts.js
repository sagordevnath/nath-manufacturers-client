import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import DeletingConfirmModal from './DeletingConfirmModal';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
const [user] =useAuthState(auth);
const [deletingProduct, setDeletingProduct] =useState(null);

useEffect(() => {
    fetch("https://intense-brook-66546.herokuapp.com/product", {
        method: 'GET',
        headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => setProducts(data))
}, [user]);
    
    return (
        <div>
            <h1 className='text-2xl text-center my-5 '>Manage All Products: {products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price/per</th>
                            <th>Available Quantity</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                <div className="w-8 rounded">
                                    <img src={product.img} alt={product.name} />
                                </div>
                            </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.availableQuantity}</td>
                                
                                <td>
                                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mr-5">Delete</label>
                                    </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeletingConfirmModal
                deletingProduct={deletingProduct}
                setProducts={setProducts}
                products={products}
                // refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeletingConfirmModal>}
        </div>
    );
};

export default ManageProducts;