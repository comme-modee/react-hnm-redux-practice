import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
    let {id} = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        // 컴포넌트가 마운트될 때 한 번만 실행되도록
        dispatch(productAction.getProductDetail(id));
    }, [dispatch, id]);

    const product = useSelector(state => state.product.productDetail)
    console.log(product);
      
  return (
    <div className='product-detail-container'>
        <div><img src={product?.img} alt=''/></div>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product.size && product.size.map((size, index) => <span key={index}>{size}</span>)}</div>
        <button>Order</button>
    </div>
  )
}

export default ProductDetail