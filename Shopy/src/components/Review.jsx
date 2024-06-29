import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold py-5">Customer Reviews</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance. I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance. I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance. I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance. I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance. I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "I've been using this product for a few months now, and I'm
                  blown away by its performance.I can't imagine going
                  back to the way things were before."
                </p>
                <h1 className="text-black font-semibold text-center">
                  John Smith
                </h1>
                <div className="text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                </div>

                <div className="card-actions justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/Tm68vxn/apimg-1.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
   
      </Swiper>
    </div>
  );
};

export default Review;
