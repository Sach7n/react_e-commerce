import React, { useContext, useEffect } from 'react';
import { ProdContext } from '../Context';
import Product from "../Components/Product";
import { Row, Col } from 'react-bootstrap'

const ProductList = () => {

    const { products, setProducts, items, loading } = useContext(ProdContext);

    useEffect(() => {
        const fetchItems = () => {
            setProducts(products)
        }
        fetchItems();
    }, [])

    return (
        <>
            {loading ?
                <h1>Loading ...</h1>
                :
                <Row>
                    {products.map(item => <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                        <Product value={item} />
                    </Col>)}
                </Row>

            }

        </>
    );
};

export default ProductList;