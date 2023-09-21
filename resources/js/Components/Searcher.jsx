import IconBtn from '../Components/IconBtn'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import useProductQuery from '../Hooks/useProductQuery'

const Searcher = ({isShow,setIsShow}) => {

	const [searchValue, setSearchValue] = useState("");
	const {frontendUrl,setQuery} = useProductQuery();

	const handleSearch = (e) => {
		e.preventDefault();

		setQuery({
			q : searchValue,
			p : 1,
		})
	}


	return (

			<form onSubmit={handleSearch}>
				<div className="bg-white  flex items-center justify-center z-10 h-[2.5rem]">
				<input 
					type="text"
					value = {searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className="w-full bg-slate-200 outline-none h-full px-4" 
					placeholder="Search ..."
				/>
				<div className="flex">

					<div className="bg-slate-900 h-[2.5rem] w-[2rem] gap-4 flex items-center justify-center">
						<button 
							type="submit"
						>
							<FontAwesomeIcon 
								icon = {faMagnifyingGlass}
							/>
						</button>
					</div>


					<div className="md:hidden bg-red-500 h-[2.5rem] w-[1.5rem] gap-4 flex items-center justify-center text-white">
						<IconBtn
							icon={faXmark}
							onClick={() => {setIsShow(false)}}
						 />
					</div>

				</div>
			</div>
		</form>
	)
}

export default Searcher;