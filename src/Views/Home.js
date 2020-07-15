import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Home() {
    const url = `https://5f06deb49c5c25001630642f.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let products = useAxiosGet(url);

    let content = null;

    if (products.error) {
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content = 
        products.data.map((product, key) =>
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return(
        <div>
            <h1 class="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            { content }
        </div>
    );
}
export default Home;