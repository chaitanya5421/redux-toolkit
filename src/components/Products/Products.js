import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Product from './Product'
// import { fetchproducts } from '../../redux/productactions/ProductActions'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/cartSlice'
import { FetchProducts } from '../../store/productsSlice'
import { ProductContext, useProduct } from '../Context/Context'


const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const { addProduct } = useProduct();
    // const products = useSelector(state => state.productsData.products)
    // console.log(products)

    // const [products, setProducts] = useState([])
    const dispatch = useDispatch() 
    const products = useSelector((state) => state.product.data)
    // addProduct(products)


    const handleAddProduct = () => {
        const newProduct = { id: 1, name: 'New Product' };
        addProduct(products);
      };

    useEffect(() => {
        // getproductsData()
        // dispatch(fetchproducts())
        dispatch(FetchProducts())
    }, []) 

    // const getproductsData = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     const data = await response.json()
    //     setProducts(data)
    // }

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    
    return (
        <>
            <h2>Products</h2>
            <button onClick={handleAddProduct}>Add Product</button>
            <div className="container">
                <div className="row">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div className="col-xl-3 mt-4">
                                <div className='card'>
                                <Link to={`/product/${product.id}`}>
                                    <img className="img-fluid" src={product.image} style={{ height: "250px", width: "200px"}} /> <br />
                                    <h5>{product.title}</h5>
                                    <h6>Rs. {product.price}</h6>
                                    <button className='btn btn-warning'
                                    onClick={() => {handleAdd(product)}}
                                    >Add to Cart</button>
                                    <h6>{product.rating.rate} | {product.rating.count}</h6>
                                </Link>
                                </div>
                            </div>
                        ))
                    ) : (<img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />)}
                </div>
            </div>
        </>
    )
}

export default Products