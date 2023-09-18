import IconBtn from '../../Components/IconBtn'
import { faCartShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {useParams, useSearchParams} from 'react-router-dom';
import withCategory from '../../Utilities/withCategory'
import CategoryDropDown from './Components/CategoryDropDown'


const Product = () => {

	const {type} = useParams();

	const [searchParams, setSearchParams]  = useSearchParams();

	


	return (
		<div className="relative">

			<div className="hidden lg:block">
				<ul className="fixed top-0 h-[100vh] w-[16rem] pt-[10rem] text-slate-600">

					<li className="my-2">
						<CategoryDropDown />
					</li>

				</ul>

			</div>

			<div className="px-4 py-20 lg:ms-[16rem] ms-0">

				<div className="flex text-xl uppercase gap-2 mb-4 cursor-pointer">
					<h3>Products</h3>
					<span>/</span>
					<h3 className="text-skin-secondary">
						{type}
					</h3>
				</div>

				<div>
					<div className="cardContainer mt-10 flex items-center justify-center">

						<div className="w-full grid grid-cols-12">

							<div className="xl:col-span-4 sm:col-span-6 col-span-12 p-4 flex items-center justify-center">

								<div className="card min-h-[25rem] md:min-w-[17rem] lg:w-[22rem] shadow-lg bg-white">
									<div className="img flex items-center justify-center h-[20rem] overflow-hidden">
										<img 
											src="http://localhost:8000/brand_imgs/Gucci/img_8.jpg "alt=""
											className='h-full w-full object-cover object-center'
										/>
									</div> 
									<div className="content px-4 flex items-center justify-center flex-col w-full h-[5rem] text-slate-600">
										<h3 className="text-center font-bold mb-2">Title Name</h3>

										<div className='flex justify-between w-full'>
											<p>
												9999 Ks
											</p>

											<button
												className="text-blue-600 hover:text-skin-secondary"
											>
												Add To Cart +
											</button>
										</div>
									</div>
								</div>
							</div>


							<div className="xl:col-span-4 sm:col-span-6 col-span-12 p-4 flex items-center justify-center">

								<div className="card min-h-[25rem] md:min-w-[17rem] lg:w-[22rem] shadow-lg bg-white">
									<div className="img flex items-center justify-center h-[20rem] overflow-hidden">
										<img 
											src="http://localhost:8000/brand_imgs/Gucci/img_8.jpg "alt=""
											className='h-full w-full object-cover object-center'
										/>
									</div> 
									<div className="content px-4 flex items-center justify-center flex-col w-full h-[5rem] text-slate-600">
										<h3 className="text-center font-bold mb-2">Title Name</h3>

										<div className='flex justify-between w-full'>
											<p>
												9999 Ks
											</p>

											<button
												className="text-blue-600 hover:text-skin-secondary"
											>
												Add To Cart +
											</button>
										</div>
									</div>
								</div>
							</div>


							<div className="xl:col-span-4 sm:col-span-6 col-span-12 p-4 flex items-center justify-center">

								<div className="card min-h-[25rem] md:min-w-[17rem] lg:w-[22rem] shadow-lg bg-white">
									<div className="img flex items-center justify-center h-[20rem] overflow-hidden">
										<img 
											src="http://localhost:8000/brand_imgs/Gucci/img_8.jpg "alt=""
											className='h-full w-full object-cover object-center'
										/>
									</div> 
									<div className="content px-4 flex items-center justify-center flex-col w-full h-[5rem] text-slate-600">
										<h3 className="text-center font-bold mb-2">Title Name</h3>

										<div className='flex justify-between w-full'>
											<p>
												9999 Ks
											</p>

											<button
												className="text-blue-600 hover:text-skin-secondary"
											>
												Add To Cart +
											</button>
										</div>
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

export default Product;