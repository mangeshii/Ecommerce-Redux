import {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "../constants/actionTypes";

const initialState = {
    products:[]
}

export const ProductReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_PRODUCTS:
            return {...state, products : action.payload};
        default:
            return state
    }
}