import { useContext, useEffect, useState } from "react";
import Navbar from "../Head/Navbar";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
  const { loading,user,} = useContext(AuthContext);
  const { productId } = useParams();
  const [product, setProducts] = useState();

  useEffect(() => {
   
    fetch(`https://shopy-server-rho.vercel.app/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      
        setProducts(data);
       
        
        
      });
  }, [productId]);

  const handleAddToCard=(product)=>{
    const email=user.email;
    const cartProduct={...product,email};
    console.log(cartProduct);
    fetch('https://shopy-server-rho.vercel.app/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);    
          toast.success('This product Add To Cart was successfully added');
        
      })
      .catch((error) => {
        console.error('Error:', error);
       
      });
  
  }

  return (
    <div>
        <ToastContainer
        position="top-center"
        autoClose={5000} />

      <Navbar></Navbar>
  
      <div className="mx-10 lg:mx-20 my-8">
        {loading ? (
          <div className="text-center text-5xl">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        ) : product ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
            <div className="text-center">
              <img  style={{width:'400px',marginTop:'30px'}} src={product.image} alt="product image" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-700">{product.name}</h1>
              <h2 className="text-xl font-semibold text-teal-600 my-4"> Brand Name: {product.brandName}</h2>
              <h2 className="text-xl font-semibold text-black my-4"> Category: {product.type}</h2>
            
               <p className=" py-2"><span className="text-xl font-semibold">Price:</span> ${product.price}.</p>
               <p className=" py-2"><span className="text-xl font-semibold">Rating:</span> {product.rating}/5.</p>
               <p><span className="text-xl font-semibold">Description:</span> {product.description}. </p>
                 <button className="btn btn-success my-4" onClick={()=>handleAddToCard(product)}>Add To Cart</button>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 text-2xl my-5">Product not found</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
