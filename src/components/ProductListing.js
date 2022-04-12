import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        try{

            const productResponse = await fetch('https://fakestoreapi.com/products')
            const productData = await productResponse.json()
            dispatch(setProducts(productData))
        }
        catch(e){
            console.log('Error occured')
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </>
    )
}

export default ProductListing

