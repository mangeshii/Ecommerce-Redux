import {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "../constants/actionTypes";

export const setProducts=(products)=>{
    return{
        type:SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts=(products)=>{
    return{
        type:SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:REMOVE_SELECTED_PRODUCT,
    }
}