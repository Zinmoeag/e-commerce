import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const items = [1,2,3,4];

const BestSeller = () => {
	

	const {best_seller} = useSelector(state => state.product)

	return (
		<div className="my-20 bg-slate-300">
			<div className="lg:grid sm:grid-cols-12">
				<div className="col-span-4">
					<div className="text-center h-full px-4 lg:ms-8 ms-0 flex items-center justify-center mb-8 lg:mb-0">
						<div>
							<h3 className="lg:text-[3rem] text-[2rem] mb-5 uppercase font-bold text-skin-secondary font-bold">Best Seller</h3>
							<p className="text-lg font-light text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Deserunt veniam unde minus odit doloribus nobis assumenda, voluptates magnam. Exercitationem odio rerum fugit, distinctio quasi, similique dolorum deleniti et totam! Eaque!</p>
						</div>
					</div>
				</div>

				<div className="col-span-8 bg-skin-secondary md:pe-4">
					 <Swiper
				 	  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				      spaceBetween={0}
				      slidesPerView={2}
				      autoplay={{ delay: 3000 }}
				      pagination={{ clickable: true }}
				      onSwiper={(swiper) => {}}
				      onSlideChange={() => {}}
				    >
				    {
				    	best_seller && best_seller.map((item,i) => (

							      <SwiperSlide key={i}>
								     <div className="md:h-[25rem] sm:h-[20rem] ">
								     	{ item.image ? (
								     		<Link 
									     		to ={`/pos/products/prodxts_${item.product_code}`}
									     	>
									     		<img 
										     	src={item.image} 
										     	alt="" 
										     	className="h-full w-full object-cover object-center"
										     	/>
								     		</Link >
								     	
								     	) : (
									     	<img 
										     	src="https://i.pinimg.com/564x/c9/07/be/c907be065bfa9de3d57339abfdb0e00b.jpg" 
										     	alt="" 
										     	className="h-full w-full object-cover object-center"
									     	/>
								     	)}
								     </div>
							      </SwiperSlide>

				    	))
				    }

				    </Swiper>
				</div>
			</div>
		</div>
	)
}

export default BestSeller;	