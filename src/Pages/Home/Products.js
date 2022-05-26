import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://intense-brook-66546.herokuapp.com/product', {
        method: 'GET',
        headers:{
            'content-type': 'application/json'
        }
    }).then(res => res.json()));    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-15 min-w-screen mx-10'>
            <div className='text-center'>
                <h3 className='text-primary text-3xl font-bold uppercase my-10'>Our Products</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.slice(0,6).map(product =><Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;