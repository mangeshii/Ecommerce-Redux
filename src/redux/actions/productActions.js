import {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "../constants/actionTypes";

export const setProducts=()=>{
    return{
        type:SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts=()=>{
    return{
        type:SELECTED_PRODUCT,
        payload: products
    }
}