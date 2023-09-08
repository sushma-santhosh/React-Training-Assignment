import React, { useReducer, useState } from 'react'
import Card from '../../Card'
import mockApiResponse from '../utils/mockResponse'
import useGeneratePrice from '../hooks.js/useGeneratePrice';
import {useNavigate} from 'react-router-dom';

const reducer = (state, action) =>{
switch(action.type){
    case "UPDATE_JABHLA":
        return{
            ...state,
            products:action.payload
        }
    case "UPDATE_FILTER":
        return{
            ...state,
            isFilter:action.payload
        }
    case "UPDATE_BUTTON_NAME":
        return{
            ...state,
            buttonName:action.payload
        }
}
}


const Body = () => {
    const [ state, dispatch ] = useReducer(reducer, { products: mockApiResponse, isFilter: false, buttonName: 'Get Velcro Jabhla' })
    //const [products, setproducts] = useState(mockApiResponse);
    const {price,computePrice,productName,updateProductName} = useGeneratePrice();
    const navigate = useNavigate();
    React.useEffect(()=>{
        if(state.isFilter){
            dispatch({type:"UPDATE_BUTTON_NAME", payload:"Get Unfiltered Jabhla"})
        }
        else{
            dispatch({type:"UPDATE_BUTTON_NAME", payload:"Get Velcro Jabhla"})
        }
    },[state.isFilter])
    const cardButtonClick = (ratings, isVelcro, productName) => {
        const addPrice = isVelcro?5:0;
        computePrice(ratings,addPrice);
        updateProductName(productName);
    }
    const filterJabhla = () => {
        if(!state.isFilter) {
            filteredData = mockApiResponse.filter((product) => product.isVelcro);
            console.log(filteredData);
            dispatch({type: "UPDATE_JABHLA", payload: filteredData});
        }
        else {
            dispatch({type: "UPDATE_JABHLA", payload: mockApiResponse});
        }
        dispatch({type: "UPDATE_FILTER", payload: !state.isFilter});

    }
    return (
        <div className='container-card'>
            Baby Store
            <div>Currently displayed products on your page - {state.products.length}</div>
            <div>Filter is {state.isFilter?"ON":"OFF"} </div>
           {price&&productName&&(<div>Your price of {productName} is {price}</div>)}
           <button onClick={filterJabhla}>{state.buttonName}</button>
           <button onClick={()=>{navigate('Feedback',{ state: { value: productName } })}}>Feedback</button>
            <div className='cards-list'>
            {state.products.map((product) => <Card key={product.id} details={product} cardButtonClick={cardButtonClick}/>)}
            </div>
        </div>
    )
}

export default Body