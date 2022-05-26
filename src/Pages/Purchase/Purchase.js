import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetails';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import {toast} from 'react-toastify';

const Purchase = () => {
    const {id} = useParams();
    const [product] = useProductDetail(id);
    const {_id, name, img, description, price, minimumOrderQuantity, availableQuantity} = product;
    const [user] = useAuthState(auth);
    const [error, setError] = useState();
    const [disabled, setDisabled] = useState(false);


    // const handleQuantity = e => {
        // const quantity = parseInt(e.target.orderQuantity.value);
        // const availableOrderQuantity = parseInt(availableQuantity);
        // const minimumQuantity = parseInt(minimumOrderQuantity)
        // if(quantity > availableOrderQuantity || quantity < minimumQuantity){
        //     setDisabled(true);
        //     setError('Quantity must be between ' + minimumQuantity + ' and ' + availableOrderQuantity);
        // }
    // }
    const handleOrder = event => {
        event.preventDefault();  
        
        const quantity = parseInt(event.target.orderQuantity.value);
        const availableOrderQuantity = parseInt(availableQuantity);
        const minimumQuantity = parseInt(minimumOrderQuantity)
        // if(quantity > availableOrderQuantity || quantity < minimumQuantity){
        //     setError('Quantity must be between ' + minimumQuantity + ' and ' + availableOrderQuantity);
        //     setDisabled(true);
        // }

        const order = {
            orderId: _id,
            img: img,
            productName: name,
            price: price,
            quantity: event.target.orderQuantity.value,
            userName: user.displayName,
            userEmail: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,

        }

        fetch('https://intense-brook-66546.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(quantity > availableOrderQuantity || quantity < minimumQuantity){
                toast.error('Quantity must be between ' + minimumQuantity + ' and ' + availableOrderQuantity);
                setDisabled(data);
            }
           else {
            toast.success('Order placed successfully');
           }
            // empty input
            event.target.orderQuantity.value = '';
            event.target.address.value = '';
            event.target.phone.value ='';
        })
    }

    const handleQuantity = event => {
        
        const quantity = parseInt(event.target.orderQuantity.value);
        const availableOrderQuantity = parseInt(availableQuantity);
        const minimumQuantity = parseInt(minimumOrderQuantity)
        if(quantity > availableOrderQuantity || quantity < minimumQuantity){
            toast.error('Quantity must be between ' + minimumQuantity + ' and ' + availableOrderQuantity);
            setDisabled(true);
        }
       else {
        toast.success('Order placed successfully');
       }
    }
    return (
        <>
        <div className="hero min-h-screen min-w-screen bg-base-200 mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse sm: flex-col-reverse">
    <div className='card card-compact w-96 bg-base-100 shadow-xl flex flex-col mt-8 p-10'>
        <form onSubmit={handleOrder}>
        <h1 className='text-3xl tex-center text-green-400 mb-6 mt-0'>Order Here!</h1>
    <p>Name: <input type="text" placeholder={user.displayName} readOnly className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Email: <input type="email" placeholder={user.email} readOnly className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Address: <textarea type="text" name='address' placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Phone: <input type="text" name='phone' placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Order Quantity: <input onChange={()=>{handleQuantity()}} name='orderQuantity' type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mb-2" />
    </p>
    {disabled ? <input className="btn btn-secondary w-full max-w-xs"type="submit" disabled value="Order Now" />: <input className="btn btn-secondary w-full max-w-xs"type="submit" value="Order Now" />}
        </form>
    </div>
    <div>
    <div className="card w-50 bg-base-100 shadow-xl mx-20">
  <figure className="px-15 pt-15">
    <img width='45%' src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-xl">
    <h2 className="card-title text-2xl">Name: {name}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
    <p>Available Quantity: {availableQuantity}</p>    
  </div>
</div>
    </div>
  </div>
</div>

        </>
    );
};

export default Purchase;