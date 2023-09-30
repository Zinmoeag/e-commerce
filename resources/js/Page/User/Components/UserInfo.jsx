import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import UserDisplayText from '../../../Utilities/UserDisplayText'
import {capitalizeFirstLetter} from '../../../Utilities/Str'
import Logout from './Logout'

import DropDown from '../../../Components/DropDown'


const link = [
	{id:1, link:"/user/edit", name:'Update Personal Information'},
	{id:2, link:"/user/change-password", name:'Change Password'},
	{id:3, link:"/user/change-email", name:'Change Email'},
]

const UserInfo = ({user}) => {
const displayText = UserDisplayText(user.name);

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
						{
							user.photo ? (
								<img 
									src={user.photo}
									alt="dd" 
									className="w-full h-full object-cover"
								/>
							) : (
								<h3 className="uppercase text-[5.6rem] text-center text-white">
									{displayText}
								</h3>
							)
						}
					</div>

					<h3 className="text-xl text-slate-700 py-1 px-2">{capitalizeFirstLetter(user.name)}</h3>

					{
						user.phone && (
							<p className="text-slate-600 mt-2">
								<FontAwesomeIcon 
									icon={faPhone} 
									className="text-red-500 pe-4"
								/>
								<span className="text-justify">
									{user.phone}
								</span>
							</p>
						)
					}

					{
						user.address && (
							<p className="text-slate-600 mt-2">
								<FontAwesomeIcon 
									icon={faLocationDot} 
									className="text-red-500 pe-4"
								/>
								<span className="text-justify">
									{Object.values(JSON.parse(user.address)).join(", ")}
								</span>
							</p>	
						)
					}
					

					<div id="edit-links" className="my-4">
						<DropDown 
							name = "Edit Profile"
							data = {link}
						/>
					</div>


					<Logout />

				</div>
			
			</section>
		</>
	)
}

export default UserInfo;