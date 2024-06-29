import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../Head/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import app from "../firebase/firebase.config"


const auth = getAuth(app);

export default function Login() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loginSuccess, setLoginSuccess] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    if (email && password) {
      try {
        const result = await signInUser(email, password);
        console.log(result.user);
        setLoginSuccess(true);

        // Display a success toast
        toast.success(loginSuccess,'Login successful!');

        navigate(location?.state ? location.state : '/');
      } catch (error) {
        console.error(error);

        // Handle Firebase errors
        if (error.code === 'auth/wrong-password') {
          toast.error('Password does not match.');
        } else if (error.code === 'auth/user-not-found') {
          toast.error('Email not found.');
        } else {
          // Display an error message
          toast.error('User password or email doesnt match.');
        }
      }
    } else {
      console.error('User Email and password are required.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);

      // Set login success state and display a success toast
      setLoginSuccess(true);
      toast.success('Google login successful!');

      // Redirect the user to the desired location
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error(error);

      // Handle Google authentication errors
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error('Google login popup closed by the user.');
      } else {
        // Display a generic error message
        toast.error('Google login failed. Please try again later.');
      }
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
      />
     
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" lg:text-left text-center">
            <img
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src="https://i.ibb.co/p1YzB5M/login.jpg" alt="" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form
              onSubmit={handleLogin}
              className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-blue-600">Login</button>
              </div>

            </form>
             <div className="my-8  ml-4">
                    <a href="#" className="label-text-alt link link-hover text-base ">Don't you have an account?</a>
                    <Link to="/register" className="label-text-alt link text-lg text-purple-600 ">
                      Register
                    </Link>
                  </div>
            <button onClick={handleGoogleLogin} className="btn text-white bg-blue-600">Login with Google</button>

          </div>
        </div>
      </div>
    </>
  );
}
