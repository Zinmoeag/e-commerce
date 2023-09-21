import {PaginationRangeArray} from "../Utilities/PaginationRangeArray"
import {Link, useSearchParams} from "react-router-dom"

const ControllerBtn = ({text, currentPage, forControll , controllerClick}) => {

	const handleController = (e) => {
		const controll = Number(e.currentTarget.getAttribute("data_for"));


		if(!(controll === currentPage)){
			controllerClick(controll)
		}
	}


	let controllText = ""
	switch(text){
		case "next":
			controllText = ">"
			break
		case "prev":
			controllText = "<"
			break
		case "&#187;":
			controllText = ">>"
			break
		case "&#171;":
			controllText = "<<"
			break
	}


	if(forControll){
		return (
			<button 
				className="bg-slate-900 hover:bg-skin-secondary text-sm w-10 h-10 rounded-full text-white font-bold border-white border-2 shadow-md hidden md:block"
				data_for = {forControll}
				onClick = {handleController}
			>
					{controllText}

			</button>
		)
	}

}

export default function Pagination({currentPage,total,pagePerSlide,siblings,itemClickHandle,controllerClick}){

	const [searchParams] = useSearchParams();

	let totalPage = Math.ceil(total / pagePerSlide) ;
	const paginatedArr = PaginationRangeArray(currentPage,total,pagePerSlide,siblings);

	const handelClick = (e) => {

		let page = Number(e.currentTarget.innerHTML);
		if(page){
			itemClickHandle(page);
		}
	}
	
	return (
		<>

		<div className="flex items-center gap-1">

			<ControllerBtn text={"&#171;"} currentPage={currentPage} forControll={1} controllerClick={controllerClick} />

			<ControllerBtn text={"prev"} currentPage={currentPage} forControll={currentPage <= 1 ? 1 : currentPage-1} controllerClick={controllerClick} />
			

			{paginatedArr && paginatedArr.map((link,i) => {
				return(
						<button
						key={i}
						 onClick={handelClick}
						 className={`${currentPage == link? "bg-skin-secondary" : "bg-white"} hover:bg-skin-secondary text-[0.8rem] sm:text-sm w-10 h-10 text-slate-900 border-slate-900 border-[0.05rem] border-slate-900 shadow-md rounded-full`}
						>
						{link}
						</button>
				)
			})}

			<ControllerBtn text={"next"} currentPage={currentPage} forControll={currentPage >= totalPage ? totalPage : currentPage+1} controllerClick={controllerClick} />

			<ControllerBtn text={"&#187;"} currentPage={currentPage} forControll={totalPage} controllerClick={controllerClick} />

		</div>



		</>
	)
}		