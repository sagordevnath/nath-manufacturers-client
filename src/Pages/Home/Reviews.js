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
        <section className='my-20 mx-10'>
            <div>
                <h4 className="text-2xl uppercase text-center text-primary font-bold mb-5">Customer Reviews</h4>
                <h2 className='text-xl my-4'>What our customer say</h2>
            </div>
        <div className='flex justify-between'>
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