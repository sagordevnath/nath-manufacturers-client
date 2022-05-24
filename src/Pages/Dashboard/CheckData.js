import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const CheckData = ({order}) => {
    const stripePromise = loadStripe('pk_test_51L0kN1Hscznr6ukitXCyQQF1VknaA0Jx0rHh67865ZihtFc1bjft87FwfKcEISDTc87dD1VKOEcJEQOpkEizdBoI00ODpibfL7');
    const totalPrice = parseInt(order?.quantity * order?.price)
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

export default CheckData;