import IconBtn from '../../Components/IconBtn'
import {useEffect, useState} from 'react'
import { faCartShopping, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import withCategory from '../../Utilities/withCategory'
import SlideInAnimation from '../../Components/SlideInAnimation'
import CategoryDropDown from './components/CategoryDropDown'
import BrandsDropDown from './components/BrandsDropDown'

import FilterCategoryDropDown from './components/FilterCategoryDropDown'
import FilterBrandDropDown from './components/FilterBrandDropDown'

import Card from './components/Card.jsx'
import {useScroll} from '../../Hooks/useScrollTop'
import useProductQuery from '../../Hooks/useProductQuery'
import {productApi} from '../../Api/apiUrl'
import useFetcher from '../../Hooks/useFetcher'
import Pagination from '../../Components/Pagination'

const Product = () => {

	useScroll();
	const {url, search, setQuery} = useProductQuery();
	const {data, loading, error } = useFetcher(url);

	const items = data?.data;
	const hasItems = !loading && items?.length > 0;

	const [mobileNavigatorShow, setMobileNavigatorShow] = useState(false);


	const handlePage = (page) => {
		setQuery({
			p : page
		})
	}

	const handleControlPage = (page) => {
		setQuery({
			p : page
		})
	}


	return (
		<div className="relative flex" id="products">

			<div className={`${mobileNavigatorShow ? "translate-x-0" : 'translate-x-[-100%]'} transition-all duration-200 md:translate-x-[0] bg-white shadow-lg md:block top-0 flex-none w-[16rem] md:w-[12rem] h-[100vh] fixed pt-[6rem] top-0 left-0 z-30`}>
				<ul className="top-0 h-full text-slate-600 overflow-y-auto px-2 relative pt-[2rem]" id="sideBarFilter">

					<button 
						className="text-red-400 absolute top-0 right-2 block md:hidden"
						onClick={() => setMobileNavigatorShow(false)}
					>
						Close
					</button>
					<li className="mb-14 w-full flex flex-col gap-2">

						<CategoryDropDown />
						<BrandsDropDown />

					</li>
				</ul>
			</div>

			<div className="px-4 md:ms-[12rem] flex-1 pt-8">
				<div>
					<div className="flex text-md uppercase gap-2 mb-4 cursor-pointer">

						<h3>Products</h3>

						{search && (
							<>
							<span>/</span>
							<h3>Search</h3>
							<span>/</span>
							<h3 className="text-skin-secondary">
								{search}
							</h3>
							</>
						)}
					</div>


					<div id="filter" className="flex justify-between items-center border-t-[0.1rem] border-slate-500">

						<div className="flex items-center justify-center">
							
							<div className="md:hidden">
								<IconBtn 
									icon={faBars}
									onClick ={() => setMobileNavigatorShow(true)}
								/>
							</div>

							<h3 className="text-sm text-slate-700 p-4">Filter</h3>
						</div>

						<div className="flex gap-2">
							<FilterCategoryDropDown />
							<FilterBrandDropDown />
						</div>
					</div>

					<div>
						<div className="cardContainer mt-10 flex items-start justify-center">

							<div className="w-full grid grid-cols-12">

								{items?.length === 0 ? (
									<div className="col-span-12 p-4 flex items-center justify-center text-red-400 border-t-2 border-slate-200">
										<p>There is no Items to be Shown</p>
									</div>
								) : hasItems ? items.map((item,i) => (
									<div className="xl:col-span-4 sm:col-span-6 col-span-12 p-4 flex items-center justify-center" key={item.id}>
										<SlideInAnimation itemNo={i}>
											<Card
												cardData={item}
											/>
										</SlideInAnimation>
									</div>
								)) : (
									<div className="col-span-12 p-4 flex items-center justify-center h-[10rem]">
										<img 
											src="http://localhost:8000/uploads/loading.gif" 
											alt="" 
											className="w-24 h-24"
										/>
									</div>
								)}



							</div>


						</div>

						{hasItems && (							
							<div className="my-14 flex justify-end">
								<Pagination
									currentPage = {data?.current_page}
									total={data?.total}
									pagePerSlide={data?.per_page}
									siblings={1}
									itemClickHandle={handlePage}
									controllerClick={handleControlPage}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)

}

export default Product;