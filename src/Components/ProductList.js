import React, { useContext,useEffect } from 'react';
import { ProdContext } from '../Context';
import Product from "./Product";
import "./ProductList.css"

const ProductList = () => {

    const { products,setProducts,items, loading } = useContext(ProdContext);

    useEffect(() => {
        const fetchItems = () => {
            setProducts(products)
        }
        fetchItems();
    }, [items])

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