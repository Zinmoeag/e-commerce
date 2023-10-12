const CartItem = ({image,name,product_code,brand,quantity,totalPrice }) => {

	return (
		<div className="h-fit h-[20rem] bg-white  rounded-lg border-slate-400 overflow-hidden flex items-center flex-col sm:flex-row sm:text-md text-sm relative border-slate-400 border-[0.05rem] p-2 px-6 my-4">
			<div className="md:w-[6rem] md:h-[8rem] h-[20rem] flex items-center justify-center md:me-4">
				<img 
				src={image}
				alt=""
				className='h-full w-full object-center object-cover absolute md:relative z-10'
				/>
			</div>

			<div className="flex w-full justify-betweeen relative z-20">
				<div className="flex flex-col justify-center md:w-[15rem] w-[8rem]">
					<h3>{name}</h3>
					<p className="text-slate-400 text-sm">{product_code}</p>
				</div>
				<div className="flex flex-1 flex-col justify-center items-end px-2">
					<p>{quantity} Qty</p>
				</div>

				<div className="flex flex-1 flex-col justify-center items-end px-2">
					<p>{totalPrice} Ks</p>
				</div>
			</div>
		</div>		
	)
}


export default CartItem;