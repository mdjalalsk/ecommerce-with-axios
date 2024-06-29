
import { Autoplay, Navigation, Pagination,} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// custon css 
import './Slider.css';
export default function OfferSlider() {
    return (
        <div className='container mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src="https://i.ibb.co/LZ4J0tV/slider1.png" alt="Slide 1"  />
                </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/FXW8fFj/slider2.png" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/8z2TJR9/slider3.png" alt="Slide 3" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
