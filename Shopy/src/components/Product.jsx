import { Link, useParams } from 'react-router-dom';
import Navbar from '../Head/Navbar';
import { useEffect, useState } from 'react';
import OfferSlider from './OfferSlider';

const Product = () => {
 
    const { brandName } = useParams();
    // console.log(brandName)
    const [products, setProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
      
        fetch(`https://shopy-server-rho.vercel.app/product/${brandName}`)
            .then((res) => res.json())
            .then((data) => {
              setProducts(data);
                
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [brandName]);

    return (
        <div>
            <Navbar />
            <OfferSlider></OfferSlider>
            <div className="mx-10 lg:mx-20">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4 my-5'>
                  
               

                    {
                    products.length > 0? 
                    (

                 products.map(product =><div key={product._id}>
                 <div className="card card-compact bg-base-100 shadow-xl p-5">
            
             <figure>
                <img className='w-32 h-32' src={product.image} alt="product image" />
             </figure>
                 
                  <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                 <div className='flex justify-between'>
                 <p className='text-xl'>Price: ${product.price}</p>
                 <p className='text-xl'>Rating: {product.rating}/5</p>
                 </div>
              <div className="card-actions justify-between mt-3">
                <Link to={`/singleProduct/${product?._id}`}><button className="btn btn-success">Details</button></Link>
                <Link  to={`/editProduct/${product?._id}`}> <button className="btn btn-success">Update</button></Link>
               
                
              </div>
              </div>
              </div>

             </div>))
                    :(
                    <h1 className='text-center text-xl my-6'>There is no product for this Brand.</h1>    
                              
    ) 
                  
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Product;
