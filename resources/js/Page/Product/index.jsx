  import IconBtn from '../../Components/IconBtn'
import {useEffect} from 'react'
import { faCartShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {useParams, useSearchParams} from 'react-router-dom';
import withCategory from '../../Utilities/withCategory'
import SlideInAnimation from '../../Components/SlideInAnimation'
import CategoryDropDown from './Components/CategoryDropDown'
import Card from './Components/Card'


const Product = () => {

	const {type} = useParams();

	const [searchParams, setSearchParams]  = useSearchParams();

	return (
		<div className="relative pt-14" id="products">

			<div className="hidden lg:block">
				<ul className="fixed top-0 h-[100vh] w-[16rem] pt-[10rem] text-slate-600">

					<li className="my-2">
						<CategoryDropDown />
					</li>

				</ul>

			</div>

			<div className="px-4 lg:ms-[16rem] ms-0">

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
									<Card />
							</div>

						</div>



					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;