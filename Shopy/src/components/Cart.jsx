import { useContext, useEffect, useState } from 'react'
import Navbar from '../Head/Navbar'
import { AuthContext } from '../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Cart() {
  const {user}=useContext(AuthContext);
  const userEmail=user.email;
  // console.log(userEmail);
  const[cartItems,setCartItems]=useState([]);
  

  useEffect(()=>{
    fetch(`https://shopy-server-rho.vercel.app/getCartItems/${userEmail}`)
    .then(response => response.json())
    .then(data => 
      setCartItems(data)
      )    
  },[])

  const handleDelete=(id) => {
    console.log(id)
     fetch(`https://shopy-server-rho.vercel.app/delete/${id}`,
     {
      method: 'DELETE',
     })
     .then(response => response.json())
     .then(data =>{
      console.log(data);
      if (data.deletedCount > 0){
        toast.success('This product deleted successfully');
        const remaining=cartItems.filter(items=>items._id!==id);
        setCartItems(remaining);
      }
     })
     .catch((error) => {
      console.error('Error:', error);
    })
  };

  return (
    <>
      <Navbar></Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000} />
      <div className='mx-10 lg:mx-20'>
         <div className="overflow-x-auto">
         {cartItems.length > 0 ? (
  <table className="table">
    <caption className="my-4 text-3xl font-bold">Total Product: {cartItems.length}</caption>
    <thead>
      <tr className="text-xl bg-black text-white">
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => (
        <tr key={item._id}>
          <td>
            <img className="w-32" src={item.image} alt="product image" />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-error" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <h1  className='text-center text-3xl my-5 text-red-500'>There is no product in this cart.</h1>
)}

         
    
</div>
        
  </div>
    </>
  )
}
