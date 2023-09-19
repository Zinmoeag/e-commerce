const Card = () => {
	return (
		
		<div className="card min-h-[25rem] md:min-w-[17rem] lg:w-[22rem] shadow-lg bg-white">
			<div className="img flex items-center justify-center h-[20rem] overflow-hidden">
				<img 
					src="http://localhost:8000/brand_imgs/Gucci/img_8.jpg "alt=""
					className='h-full w-full object-cover object-center'
				/>
			</div> 
			<div className="content px-4 flex items-center justify-center flex-col w-full h-[5rem] text-slate-600">
				<h3 className="text-center font-bold mb-2">Title Name</h3>

				<div className='flex justify-between w-full'>
					<p>
						9999 Ks
					</p>

					<button
						className="text-blue-600 hover:text-skin-secondary"
					>
						Add To Cart +
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card;