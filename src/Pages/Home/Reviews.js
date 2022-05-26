import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://intense-brook-66546.herokuapp.com/customer-review', {
    //     method: 'GET',
    //     headers:{
    //         'content-type': 'application/json'
    //     }
    // }).then(res => res.json()));   
    // console.log(reviews) 
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    useEffect(()=> {
        fetch('https://intense-brook-66546.herokuapp.com/customer-review', {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    setReviews(data);
                    // toast.success('Review added successfully');
                    // reset();
                })
    }, [])
    return (
        <section className='my-28'>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Customer Reviews</h4>
                <h2 className='text-3xl'>What our customer say</h2>
            </div>
            {/* <div>
                <img src={quote} className="w-24 lg:w-48" alt="" />
            </div> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    </section>
    );
};

export default Reviews;