import { faXmark } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../../Components/IconBtn'

const Cart = ({isShow,setIsShow}) => {

	return (
		<div className={`${isShow ? 'translate-y-0' : 'translate-y-[-400%]'} fixed top-0 left-0 right-0 h-[100vh] z-50 transition-all duration-all`}>

			<div className="w-full h-full bg-slate-900/70 flex items-center justify-center">
 
				<div className='lg:w-[60rem] md:w-[40rem] h-[30rem] bg-slate-100 relative'>

					<div className="absolute top-0 bg-skin-third w-6 h-6 flex items-center justify-center right-0">
						<IconBtn
							icon={faXmark}
							onClick={() => setIsShow(false)}
						/>
					</div>

					<div className="grid grid-cols-10 w-full h-full">
						<div className="col-span-3 bg-slate-800 text-slate-400 py-8 px-6 lg:flex items-center justify-center hidden">
							<div className=" w-full">
								<div className="mb-6">
									<h3 className="text-lg mb-2 font-bold text-center">Quick Cart</h3>
									<p className="text-center">9 items in your Shopping Cart</p>
									<div className="border-slate-400 border-b-2 my-4"></div>
									<div className="flex justify-between mt-4">
										<h3>Total</h3>
										<h3 className="text-skin-secondary">9999 Ks</h3>
									</div>
								</div>

								<button 
									className="bg-slate-100 hover:bg-skin-secondary hover:text-slate-800 text-slate-800 w-full py-2"
								>
									Continue Shopping
								</button>
							</div>
						</div>

						<div className="lg:col-span-7 md:col-span-10 px-6 py-4 h-[26rem] w-full">
							{/*card*/}
							<div className="h-full overflow-auto">
								<h3 className='mb-4'>Your Shopping Cart</h3>

								<div className="h-[6rem] bg-white  rounded-lg border-slate-400 overflow-hidden flex">
									<div className="min-w-[5rem] flex items-center justify-center">
										<img 
										src="data:image/jpeg;base64,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" 
										alt=""
										className='h-full'
										/>
									</div>

									<div className="grid grid-cols-5 w-full">
										<div className="col-span-2 flex flex-col justify-center">
											<h3>Item Name</h3>
											<p className="text-slate-400 text-sm">Brand</p>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<p>9999 Ks</p>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<div className="flex">
												<button className="bg-skin-third w-6">+</button>
												<div className="w-8 text-center">11</div>
												<button className="bg-skin-third w-6">-</button>
											</div>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<p>9999 Ks</p>
										</div>
									</div>

									<div className="px-2 flex items-center">
										<button>
											<IconBtn 
												icon={faXmark}
												onClick={() => {}}
											/>
										</button>
									</div>
								</div>
								<div className="h-[6rem] bg-white  rounded-lg border-slate-400 overflow-hidden flex">
									<div className="min-w-[5rem] flex items-center justify-center">
										<img 
										src="data:image/jpeg;base64,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" 
										alt=""
										className='h-full'
										/>
									</div>

									<div className="grid grid-cols-5 w-full">
										<div className="col-span-2 flex flex-col justify-center">
											<h3>Item Name</h3>
											<p className="text-slate-400 text-sm">Brand</p>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<p>9999 Ks</p>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<div className="flex">
												<button className="bg-skin-third w-6">+</button>
												<div className="w-8 text-center">11</div>
												<button className="bg-skin-third w-6">-</button>
											</div>
										</div>
										<div className="col-span-1 flex flex-col justify-center">
											<p>9999 Ks</p>	
										</div>
									</div>

									<div className="px-2 flex items-center">
										<button>
											<IconBtn 
												icon={faXmark}
												onClick={() => {}}
											/>
										</button>
									</div>
								</div>
							</div>



							<div className="total text-end text-blue-600 h-[4rem] w-[60rem]mt-4 flex items-center">
								<button 
									className="bg-slate-400 hover:bg-skin-secondary hover:text-slate-800 text-slate-800 w-full py-2"
								>
									Continue Shopping
								</button>

								<div className="w-[10rem]">
									total - 9999 ks
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart;