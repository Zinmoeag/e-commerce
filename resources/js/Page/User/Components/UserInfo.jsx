import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const UserInfo = () => {
	return (
		<>
			<section id="user-info">
				<div className="pt-10">
					<h3 className="uppercase text-xl font-bold text-slate-700">
						Account Detail
					</h3>
				</div>

				<div className="mt-8">
					<div className="w-[9rem] h-[9rem] bg-skin-fourth rounded-full my-6 flex items-center justify-center overflow-hidden">
						{/*<img src="https://freeportfinancialpartners.com/wp-content/uploads/2023/01/PngItem_1503945.png" alt="" />*/}
						<h3 className="uppercase lg:text-[5.6rem] text-center text-white">ZM</h3>
					</div>

					<h3 className="text-xl">Mg Mg</h3>

					<div className="border-2 border-slate-400 my-4"></div>
					
					<p className="text-slate-600">
						<FontAwesomeIcon 
							icon={faLocationDot} 
							className="text-red-500 pe-4"
						/>
						<span className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias ad tenetur, ducimus id atque distinctio dolore voluptate rem 
						</span>
					</p>

					<button
						className="bg-white hover:bg-slate-400  border-2 border-slate-400 text-center w-full text-slate-800 mt-6 py-1 rounded-lg"
					>
						<Link to="/user/edit">
							Edit Profile
						</Link>	

					</button>
				</div>
			
			</section>
		</>
	)
}

export default UserInfo;