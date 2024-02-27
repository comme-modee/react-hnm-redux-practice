import React, { useEffect, useState } from 'react'
import Product from '../component/Product'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    const [query, setQuery] = useSearchParams();
    const productList = useSelector(state => state.product.productList)
    const dispatch = useDispatch();

    const getProduct = async () => {
        let searchQuery = query.get('q')||'';
        dispatch(productAction.getProduct(searchQuery))
    }

    useEffect(()=>{
        getProduct()
    },[query])
  return (
    <div className='product-container'>
        {productList.map((item, index) => <Link to={`product/${item.id}`}><Product item={item} key={index}/></Link>)}
    </div>
  )
}

export default ProductAll