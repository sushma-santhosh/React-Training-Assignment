import React, { useReducer, useState } from 'react'
import Card from '../../Card'
import mockApiResponse from '../utils/mockResponse'
import useGeneratePrice from '../hooks.js/useGeneratePrice';



const Body = () => {
    //const [ state, dispatch ] = useReducer(reducer, { products: mockApiResponse});
    const [products, setproducts] = useState(mockApiResponse);
    const {price,computePrice,productName,updateProductName} = useGeneratePrice();
    const cardButtonClick = (ratings, isVelcro, productName) => {
        const addPrice = isVelcro?5:0;
        computePrice(ratings,addPrice);
        updateProductName(productName);
    }
    return (
        <div className='container-card'>
            Baby Store
            <div>Currently displayed products on your page - </div>
            <div>Filer is </div>
           {price&&productName&&(<div>Your price of {productName} is {price}</div>)}
            <button >Test</button>
            <button>Click me to go to Contact Page</button>
            <div className='cards-list'>
            {products.map((product) => <Card key={product.id} details={product} cardButtonClick={cardButtonClick}/>)}
            </div>
        </div>
    )
}

export default Body