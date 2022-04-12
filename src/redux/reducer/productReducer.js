import {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "../constants/action_types";

const initialState = {
    products: {
        id: 1,
        title: 'Mac Mini M1',
        category: 'Desktop'

    }
}

export const ProductReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_PRODUCTS:
            return state;
        default:
            return state
    }
}