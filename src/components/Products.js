import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./css/Products.css"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();

        if (componentMounted) {
          setData(jsonData);
          setFilter(jsonData);
          setLoading(false);
        }
      } catch (error) {
        // Handle any potential errors here
        console.error("Error fetching data:", error);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
    <div className="buttons d-flex flex-wrap justify-content-center mb-4">
  <button
    className="btn btn-outline-dark mx-1 my-1"
    onClick={() => {
      setFilter(data);
    }}
  >
    All
  </button>
  <button
    className="btn btn-outline-dark mx-1 my-1"
    onClick={() => {
      filterProduct("men's clothing");
    }}
  >
    Men's Clothing
  </button>
  <button
    className="btn btn-outline-dark mx-1 my-1"
    onClick={() => {
      filterProduct("women's clothing");
    }}
  >
    Women's Clothing
  </button>
  <button
    className="btn btn-outline-dark mx-1 my-1"
    onClick={() => {
      filterProduct("jewelery");
    }}
  >
    Jewellers
  </button>
  <button
    className="btn btn-outline-dark mx-1 my-1"
    onClick={() => {
      filterProduct("electronics");
    }}
  >
    Electronic
  </button>
  
</div>




        <div className="row">
          {filter.length === 0
            ? data.map((product) => (
                <div className="col-md-3 mb-2" key={product.id}>
                  <div className="card h-100 text-center my-4" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              
            : filter.map((product) => (
                <div className="col-md-3 mb-2" key={product.id}>
                  <div className="product card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="250px"
                      
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList =
      cat === "All" ? data : data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="title-md ">
  <h3 className=" text-black-50">See our product</h3>
</div>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
