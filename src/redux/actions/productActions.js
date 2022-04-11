import { Actiontypes } from "../constants/action_types";

export const setProducts=()=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts=()=>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload: products
    }
}