import { combineReducers } from "redux"; 
import { ProductReducer,SelectedProductReducer } from "./productReducer"; 


export const rootReducer= combineReducers({
    ProductReducer: ProductReducer,
    SelectedProductReducer:SelectedProductReducer
})

