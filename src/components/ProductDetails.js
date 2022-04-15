import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProducts } from '../redux/actions/productActions';
import "../semantic-ui/style.css"

const ProductDetails = () => {
    const { productid } = useParams()

    let product = useSelector(state => state.SelectedProductReducer)

    const { image, category, price, description, title } = product

    const dispatch = useDispatch()

    const fetchProductDetails = async (id) => {
        try {
            const DetailProductResponse = await fetch(`https://fakestoreapi.com/products/${id}`)
            const DetailProductData = await DetailProductResponse.json()
            dispatch(selectedProducts(DetailProductData))
        }
        catch (e) {
            console.log('Error occured')
        }

    }

    useEffect(() => {
        fetchProductDetails(productid)
        return () => {

            dispatch(removeSelectedProduct())
        }
    }, [productid])

    return (
        <>

            <div style={{ marginTop: '100px' }} className='ui grid container'>
                {Object.keys(product).length === 0 ? 'Loading...' : (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div style={{ height: '400px' }} className="column lp">
                                    <img style={{ height: '100%', maxWidth: '90%', width: 'auto', margin: 'auto' }} className='ui fluid image' src={image} />
                                </div>

                                <div className="column rp" style={{ padding: '30px', textAlign: 'start' }}>
                                    <h1 style={{ fontSize: "25px" }}>{title}</h1>
                                    <h2 className='ui teal tag label' style={{ fontSize: '17px' }}>{`$ ${price}`}</h2>
                                    <div style={{ margin: '15px 0px' }}>
                                        <h3 className='ui brown block header'>{category}</h3>
                                    </div>
                                    <p style={{ color: 'gray' }}>{description}</p>

                                    <div className='Shop-btn'>
                                        <div className="ui vertical animated button" style={{ backgroundColor: '#f25278', color: 'white', marginLeft: '0%' }}>
                                            <div className="visible content" >Add to Cart</div>
                                            <div className="hidden content">
                                                <i className="shop icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>



    )
}

export default ProductDetails

