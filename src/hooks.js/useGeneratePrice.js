import React from 'react'

const useGeneratePrice = () => {
    const [price, setPrice] = React.useState(null);
    const computePrice = (ratings, addPrice) => setPrice(addPrice + ratings * 200);
    const [productName, setProductName] = React.useState(null);
    const updateProductName = (name) => setProductName(name); 

    return {
        price,
        computePrice,
        productName,
        updateProductName
    }
}

export default useGeneratePrice