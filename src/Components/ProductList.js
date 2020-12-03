import React, { useContext } from 'react';
import { ProdContext } from '../Context';
import Product from "./Product";
import "./ProductList.css"

const ProductList = () => {

    const { products, loading } = useContext(ProdContext);

    return (
        <div>
            {loading ?
                <h1>Loading ...</h1>
            :
            <div className="container-grid">
                {products.map(item=><Product key={item.id} value={item} />)}
            </div>
            }

        </div>
    );
};

export default ProductList;