import brands from "../../../brand.js";
import {Link} from "react-router-dom";
import {useEffect} from 'react'
import useFetcher from '../../../Hooks/useFetcher'
import {brandApi} from '../../../Api/apiUrl'
import {useSelector} from 'react-redux'


const Brand = () => {

	const {brands} = useSelector(state => state.product)

	return (
		<div>
			<h3 className="text-2xl uppercase text-center mt-10">Our Collected Brands</h3>

			<div className="flex flex-wrap items-center justify-center gap-4 w-[90%] mt-10 m-auto">
				{brands && brands.map(item => (
					<Link to={`/pos/products?b=${item.slug}`} key={item.id} >
						<div className="img md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem] cursor-pointer">
							<div className="relative w-full h-full flex items-center justify-center p-4">
								<div className="absolute w-full h-full top-0 right-0 z-20 flex items-center justify-center hover:backdrop-blur-sm hover:bg-slate-200/20">
								</div>
								<img 
									src={item.photo} 
									alt=""
								/>
							</div>

							
						</div>
					</Link>
				))	}
			</div>

		</div>
	)
}

export default Brand