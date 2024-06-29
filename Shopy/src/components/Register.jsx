import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../Head/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])

  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');

    // Email validation
    if (!isValidEmail(email)) {
      toast.error('Invalid email address');
      
      return;
    }

    // Password validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one capital letter');
    } else if (!/[!@#$%^&*]/.test(password)) {
      toast.error('Password must contain at least one special character');
    } else {
      try {
        const result = await createUser(name, email, password);
        console.log(result);

        // Show a success toast for successful registration
        toast.success('Registration successful!');
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  function isValidEmail(email) {
    // regular expression for basic email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000} />
        
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" lg:text-left text-center">
            <img
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src="https://i.ibb.co/F3xVTyk/register-button-png-18451.png" alt="" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-blue-600">Register</button>
              </div>
            </form>
            <div className="my-8  ml-4">
                    <a href="#" className="label-text-alt link link-hover text-base">have an account?</a>
                    <Link to="/login" className="label-text-alt link text-purple-600 text-xl ">
                      Login
                    </Link>
                  </div>
          </div>
        </div>
      </div>
    </>

  )
}
