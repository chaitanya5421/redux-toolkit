import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../../store/cartSlice";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [added, setAdded] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProductData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    getProductData();
  }, []);
  
  const handleAdd = (product) => {
    dispatch(add(product))
    setAdded(true)
  } 

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      {Object.keys(product).length > 0 ? (
        <>
          <div className="my-3 d-flex align-items-center">
            <ChevronLeft
              size={25}
              onClick={handleBack}
              className="float-start"
            />
            <h2 className="text-center">Product Details Page</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>{product.category}</h3>
              <p>{product.description}</p>
            <button
            className="btn btn-warning"
            onClick={() => handleAdd(product)}
          >
            {added ? 'Added' : 'Add to Cart' }
          </button>
            </div>
          </div>

        </>
      ) : null}
    </div>
  );
};

export default Product;
