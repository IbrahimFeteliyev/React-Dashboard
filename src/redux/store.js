import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Reducers/LoginAdminReducer";
import { ProductReducers } from "./Reducers/ProductReducer";
 
 

const {default: thunk} = require("redux-thunk")


const reducer = combineReducers({
    user: UserReducer,
    products:ProductReducers
})  

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    user: {userInfo: userInfoFromLocalStorage},
    products: []
}

  
const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,   


    applyMiddleware(...middleware)
)


export default store;