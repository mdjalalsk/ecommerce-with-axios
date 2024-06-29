import { TbTruckReturn } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaShoppingCart } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Service = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
    <h1 className="text-center text-4xl font-bold my-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
        <div data-aos="fade-down" data-aos-easing="linear"
              data-aos-duration="1000" className="card card-compact bg-blue-100 shadow-xl p-4">
        <div className='mx-auto'>
                 
                 <TbTruckDelivery className='text-6xl'></TbTruckDelivery>
            </div>
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">Super Fast and Free Delivery</h2>
          </div>
        </div>
        <div className="card card-compact bg-blue-100 shadow-xl p-4" data-aos="fade-down" data-aos-easing="linear"
              data-aos-duration="1000" >
         <div className='mx-auto'>
                 
                     <RiSecurePaymentLine className='text-6xl'></RiSecurePaymentLine>
                </div>
      
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">Super Secure Payment System</h2>
          </div>
        </div>
        <div className="card card-compact bg-blue-100 shadow-xl p-4"  data-aos="fade-down" data-aos-easing="linear"
              data-aos-duration="1000">
        <div className='mx-auto'>
                     <FaShoppingCart className='text-6xl'></FaShoppingCart>
                </div>
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">Non-contact Shipping</h2>
          </div>
        </div>
        <div className="card card-compact bg-blue-100 shadow-xl p-4"  data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="1000">
                <div className='mx-auto'>
                     <GiMoneyStack className='text-6xl'></GiMoneyStack>
                </div>
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">Money-back Guaranteed</h2>
          </div>
        </div>
        <div className="card card-compact bg-blue-100 shadow-xl p-4"  data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="1000">
                <div className='mx-auto'>
                     <BiSupport className='text-6xl'></BiSupport>
                </div>
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">24/7 Support</h2>
          </div>
        </div>
        <div className="card card-compact bg-blue-100 shadow-xl p-4" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="1000" >
                <div className='mx-auto'>
                     <TbTruckReturn className='text-6xl'></TbTruckReturn>
                </div>
          <div className="card-body">
            <h2 className="text-xl text-violet-500 font-semibold text-center">Clear Return and Refund </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
