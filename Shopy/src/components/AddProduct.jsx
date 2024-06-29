import Navbar from "../Head/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {

  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const newProduct = { name, brandName, type, rating, price, image, description }
    // console.log(newProduct);
    fetch('https://shopy-server-rho.vercel.app/addProduct',{
      method: 'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(newProduct)
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        toast.success('Product add successful!');
      }
    })
  form.reset();
}
  return (
   <>
   <Navbar></Navbar>
   <ToastContainer
        position="top-center"
        autoClose={5000}
      />
   <div className="mx-10 lg:mx-20">
        <h2 className="text-3xl font-extrabold text-center pb-2 text-blue-400 mt-3">Add Product</h2>
        <form className=" p-6" onSubmit={handleSubmitForm}>
          
          <div className="md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <select  name="type" className="select select-bordered w-full">
                  <option value="mobile">Mobile</option>
                  <option value='laptop'>Laptop</option>
                   <option value="headphone">Headphones</option>
                </select>
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input type="number" name="rating" placeholder="rating" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
    
          <div className="md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
     
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
      
                <textarea className="textarea textarea-bordered w-full h-8" name="description" placeholder="Short description"></textarea>

              </label>
            </div>
          </div>
          <div className="text-center">
          <input type="submit" value="Add Product" className="btn btn-primary" />

          </div>

        </form>
        </div>
  
   </>
  )
}
