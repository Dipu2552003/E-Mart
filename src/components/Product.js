import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import Footer from './Footer';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();  // Add parentheses to invoke useDispatch

  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    return (
        <>
<div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
      </div>
      <div className="col-md-6">
        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
      <h1 className='display-5'>{product.title}</h1>
      <p className='lead'>Rating {product.rating && product.rating.rate}</p>
      <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
      <p className='lead'> {product.description}</p>
      <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>Add to Cart</button>
      <Link to="/cart" className='btn btn-dark ms-2'>Go to Cart</Link>
      
      </div>
        </>
      
    );
  };

  return (
    <>
<div className="container py-5">
      <div className="row py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Product;
