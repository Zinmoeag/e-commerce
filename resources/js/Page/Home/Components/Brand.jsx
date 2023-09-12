import brands from "../../../brand.js";
import {Link} from "react-router-dom";
import useFetcher from '../../../Hooks/useFetcher'
import {brandApi} from '../../../Api/apiUrl'

const Brand = () => {

	const url = brandApi();

	const {data,loading, error} = useFetcher(url)


	return (
		<div>
			<h3 className="text-2xl uppercase text-center mt-10">Our Collected Brands</h3>

			<div className="flex flex-wrap items-center justify-center gap-4 w-[90%] mt-10 m-auto">
				{data && data.map(item => (
					<Link to={`/pos/products/${item.slug}`} key={item.id} >
						<div className="img md:w-[13rem] md:h-[13rem] w-[5rem] h-[5rem] cursor-pointer">
							<div className="relative w-full h-full">
								<div className="absolute w-full h-full top-0 right-0 bg-slate-400/80 z-20 flex items-center justify-center hover:backdrop-blur-sm hover:bg-slate-600/50">
								</div>
								<img src="https://static.vecteezy.com/system/resources/previews/022/101/039/original/gucci-logo-transparent-free-png.png" alt="" />
							</div>
							
						</div>
					</Link>
				))	}
			</div>

		</div>
	)
}

export default Brand