import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom'
import ClothSlide from "./Components/ClothSlide"

import shoe from '../../Assets/imgs/SectionBackground/carousel/shoe.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default () => {
  return (
    <Swiper
 	    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
      className="h-[25rem]"
    >
      <SwiperSlide>
	      <div className="bg-skin-secondary h-full w-full">
            <div className='w-full h-full'>
              <div className="image w-full h-full z-10">
                <div className="w-full h-full">
                  <div className="w-full h-full">
                      <ClothSlide />
                  </div>
                </div>
              </div>
            </div>
	      </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="lg:col-span-3 md:col-span-4 h-full w-full">
            <Link to="/pos/products?c=shoes">
              <div className="bg-skin-third w-full h-full overflow-hidden relative">
                  <img src={shoe} className="object-cover object-center w-full h-full hover:scale-110 cursor-pointer transition-all duration-200" alt="" />
              </div>
            </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};