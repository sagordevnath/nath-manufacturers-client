import { useEffect, useState } from "react";

const useProductDetail = id =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://intense-brook-66546.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [id]);
    return [product]
}

export default useProductDetail;