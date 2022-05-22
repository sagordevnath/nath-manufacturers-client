import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetails';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const Purchase = () => {
    const {id} = useParams();
    const [product] = useProductDetail(id);
    const {_id, name, img, description, price, minimumOrderQuantity, availableQuantity} = product;
    const [user] = useAuthState(auth);
    const [error, setError] = useState();

    const handleQuantity = e => {
        const quantity = parseInt(e.target.orderQuantity.value);
        const availableOrderQuantity = parseInt(availableQuantity);
        const minimumQuantity = parseInt(minimumOrderQuantity)
        if(quantity > availableOrderQuantity || quantity < minimumQuantity){
            setError('Quantity must be between ' + minimumQuantity + ' and ' + availableOrderQuantity);
        }
    }
    const handleOrder = event => {
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.orderQuantity.value;

        console.log(name, email, address, phone, quantity);

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
    }

    



    return (
        <div class="hero min-h-screen min-w-screen bg-base-200 mt-5">
  <div class="hero-content flex-col lg:flex-row-reverse sm: flex-col-reverse">
    <div className='card card-compact w-96 bg-base-100 shadow-xl flex flex-col mt-8 p-10'>
        <form onSubmit={handleOrder}>
        <h1 className='text-3xl tex-center text-green-400 mb-6 mt-0'>Order Here!</h1>
    <p>Name: <input type="text" placeholder={user.displayName} readOnly class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Email: <input type="email" placeholder={user.email} readOnly class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Address: <textarea type="text" name='address' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Phone: <input type="text" name='phone' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    <p>Order Quantity: <input onBlur={handleQuantity} name='orderQuantity' type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs mb-2" /></p>
    {error}
    <input type="submit" value="Order Now" />
        </form>
    </div>
    <div>
    <div class="card w-50 bg-base-100 shadow-xl">
  <figure class="px-5 pt-5">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center text-xl">
    <h2 class="card-title text-2xl">Name: {name}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
    <p>Available Quantity: {availableQuantity}</p>    
  </div>
</div>
    </div>
  </div>
</div>

    );
};

export default Purchase;