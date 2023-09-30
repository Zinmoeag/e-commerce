import first from '../../../Assets/imgs/SectionBackground/carousel/cloth.jpg'
import nike from '../../../Assets/imgs/SectionBackground/carousel/nike.png'
import shoe from '../../../Assets/imgs/SectionBackground/carousel/shoe.jpg'
import hat from '../../../Assets/imgs/SectionBackground/carousel/hat.jpg'
import cloth from '../../../Assets/imgs/SectionBackground/carousel/cloth.jpg'
import {Link} from 'react-router-dom'

const ClothSlide = () => {

	const clothStyle = {
		backgroundImage : `url(${cloth})`,
		backgroundPosition : "center",
		backgroundSize : 'cover',
	}

	return(
		<div className="h-full relative">

			<div className="bg-white w-full h-full">

				<div className="flex justify-between h-full">

					<div className="flex justify-between flex-1">

						<div className="md:w-[10rem] lg:w-[13rem] xl:w-[20rem] h-full bg-slate-700 relative hidden md:block">

							<Link to="/pos/products?c=shirt">
								<img 
									className="h-auto xl:w-[25rem] md:scale-[1.9] lg:scale-150 xl:scale-100 ms-8 absolute z-20 xl:top-0 md:top-[7rem] md:right-[-4rem] lg:right-[-5rem] xl:right-[-7rem] hover:scale-110 transition-all cursor-pointer"
									src={nike} 
									alt=""
								/>
							</Link>
						</div>


						<div className="flex xl:flex-row flex-col flex-auto justify-between h-full w-fit">

							<div 
								className="flex flex-col items-center justify-center px-4 h-[60%] xl:h-full xl:w-[75%] w-full"
								style = {clothStyle}
								>
								<h3 
									className="text-slate-900 font-bold text-[6rem] lg:text-[8rem] xl:text-[9rem] font-bebas text-skin-transparent"
								>
								LARACAMP
								</h3>

								<Link
									to="/pos/products"
									className="border-[0.12rem] hover:bg-slate-600 text-white w-fit h-fit px-8 py-1"
								>
									Explore
								</Link>
							</div>

							<div className="xl:w-[15rem] w-full bg-slate-600 flex-1">

								<div className="flex xl:flex-col w-full h-full items-center justify-center">

									<div className="overflow-hidden xl:h-[50%] xl:w-full w-[50%] h-full cursor-pointer flex items-center justify-center">
										<Link
											className='w-full h-full' 
											to="/pos/products?c=shoes">
											<img
												className="w-full h-full object-cover object-center hover:scale-110 transition-all "
												src={shoe}
												alt=""
											/>
										</Link>
									</div>
									<div className="overflow-hidden xl:h-[50%] xl:w-auto w-[50%] h-full cursor-pointer flex items-center justify-center">
										<Link 
											to="/pos/products?c=hat"
											className='w-full h-full'
										>
											<img
												className="w-full h-full object-cover hover:scale-110 transition-all"
												src={hat}
												alt=""
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>		
	)
}

export default ClothSlide;