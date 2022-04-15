import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';
import "../semantic-ui/style.css"

const ProductDetails = () => {
    const { productid } = useParams()

    let product = useSelector(state => state.SelectedProductReducer)

    const { image, category, price, description, title } = product
    console.log(price)

    const dispatch = useDispatch()

    const fetchProductDetails = async (id) => {
        try {
            const DetailProductResponse = await fetch(`https://fakestoreapi.com/products/${id}`)
            const DetailProductData = await DetailProductResponse.json()
            console.log(DetailProductData)
            dispatch(selectedProducts(DetailProductData))
        }
        catch (e) {
            console.log('Error occured')
        }

    }

    useEffect(() => {
       fetchProductDetails(productid)
    }, [productid])

    return (
        <>
            <div style={{ marginTop: '100px' }} className='ui grid container'>
                <div class="ui placeholder segment">
                    <div class="ui two column stackable center aligned grid">
                        <div class="ui vertical divider">AND</div>
                        <div class="middle aligned row">
                            <div style={{ height: '400px'}} class="column lp">
                                <img style={{ height: '100%', maxWidth: '90%', width: 'auto', margin: 'auto' }} className='ui fluid image' src={image} />
                            </div>

                            <div class="column rp" style={{ padding: '30px', textAlign: 'start' }}>
                                <h1 >{title}</h1>
                                <h2 className='ui teal tag label' style={{ fontSize: '17px' }}>{`$ ${price}`}</h2>
                                <div style={{ margin: '15px 0px' }}>
                                    <h3 className='ui brown block header'>{category}</h3>
                                </div>
                                <p style={{ color: 'gray' }}>{description}</p>

                                <div className='Shop-btn'>
                                    <div class="ui vertical animated button" style={{ backgroundColor: '#f25278', color: 'white', marginLeft: '0%' }}>
                                        <div class="visible content" >Add to Cart</div>
                                        <div class="hidden content">
                                            <i class="shop icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default ProductDetails

