import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetails';

const Purchase = () => {
    const {id} = useParams();
    const [product] = useProductDetail(id);
    return (
        <div className='mt-20'>
            <h1>This is purchase page: {product.name}</h1>
        </div>
    );
};

export default Purchase;