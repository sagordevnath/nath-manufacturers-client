import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0kN1Hscznr6ukitXCyQQF1VknaA0Jx0rHh67865ZihtFc1bjft87FwfKcEISDTc87dD1VKOEcJEQOpkEizdBoI00ODpibfL7');

const Payment = () => {
    const { id } = useParams();
    // const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const totalPrice = parseInt(order?.quantity * order?.price)
    // useEffect( () =>{
    //     const url = `http://localhost:5000/order/${id}`;
    //     console.log(url);
    //     fetch(url, {
    //         method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    //     })
    //     .then(res=> res.json())
    //     .then(data => setOrders(data));
        

    // }, [id]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            
            <div class="card w-96 max-w-lg bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.userName}</p>
                    <h2 class="card-title">Please Pay for {order.productName}</h2>
                    <p>Your Order: <span className='text-orange-700'>{order.quantity}</span></p>
                    <p>Please pay: ${totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;