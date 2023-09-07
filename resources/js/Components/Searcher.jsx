import IconBtn from '../Components/IconBtn'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const Searcher = ({setIsShow}) => {
	return (
		<div className="bg-blue-100 py-2 px-4 rounded-full flex items-center justify-center mx-2 z-10">
			<input 
				type="text"
				className="w-full bg-skin-transparent outline-none" 
				placeholder="Search ..."
			/>
			<div className="gap-4 flex">
				<div>
					<IconBtn
						icon={faMagnifyingGlass}
						onClick={() => {}}
					 />
				</div>

				<div className="md:hidden">
				 	<IconBtn
						icon={faXmark}
						onClick={() => {setIsShow(false)}}
					 />
				</div>
			</div>
		</div>
	)
}

export default Searcher;