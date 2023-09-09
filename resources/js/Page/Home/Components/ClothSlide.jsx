import first from '../../../Assets/imgs/SectionBackground/carousel/cloth.jpg'
import {Link} from 'react-router-dom'

const ClothSlide = () => {
	return(
		<div className="bg-skin-third h-full relative">
          <img src={first} className="object-cover md:object-left object-center w-full h-full" alt="" />

          <div className="absolute z-30 top-0 flex items-center lg:justify-end justify-center w-full h-full bg-gray-800/60">
          	<div className='lg:w-[30rem] md:w-[25rem] w-[20rem]  lg:me-12 md:me-0  text-center text-lg text-skin-sixth/90 font-light'>
	          	<h3>Elevate your style with our exquisite collection of premium quality fabrics, designed to bring elegance and sophistication to your wardrobe.</h3>
	          	<button className="bg-slate-50 px-4 py-1 hover:bg-slate-800 text-sm text-slate-900 hover:text-slate-50 mt-6">
	          		<Link to="/products/cloth">Learn More</Link>
	          	</button>
          	</div>
          </div>
        </div>		
	)
}

export default ClothSlide;