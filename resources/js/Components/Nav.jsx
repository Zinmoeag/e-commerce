import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'



const Nav = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-40 text-skin-coffee">
			<div className="bg-skin-translate shadow-lg border-b-4 border-skin-coffee/50 backdrop-blur-sm">
				
				<div className="flex justify-between py-5 px-8">

					<div className="brand text-xl uppercase font-bold">
						<h4>LaraCamp</h4>
					</div>


					<div className="flex gap-4">
						<button>
							<FontAwesomeIcon icon={faUser} />
						</button>
						<button>
							<FontAwesomeIcon icon={faCartShopping} />
						</button>
					</div>

				</div>
			</div>

			<div className="text-white py-1 px-8">
				<div className="flex gap-4 justify-center text-slate-600">
					<Link to="/products" className="hover:text-skin-secondary">Products</Link>
					<Link to="/brands" className="hover:text-skin-secondary">Brands</Link>
					<Link to="/contact" className="hover:text-skin-secondary">Contact Us</Link>
					<Link to="/about" className="hover:text-skin-secondary">About Us</Link>
				</div>
			</div>
		</div>
	)

}

export default Nav;