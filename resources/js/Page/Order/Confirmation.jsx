import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../../Components/CartItem'
import useFetcher from '../../Hooks/useFetcher'
import {useParams, useNavigate} from 'react-router-dom'
import {checkConfirmation} from '../../Api/apiUrl'
import useOrder from '../../Hooks/useOrder'
import {Link} from 'react-router-dom'

const Confirmation = () => {

	const {id} = useParams();
	const url = checkConfirmation(id)
	const {data, loading, error} = useFetcher(url)
	const navigate = useNavigate();

	const products = data?.order?.products
	const [cancelStatus, setCancelStatus] = useState(null);
	const {cancelOrder} = useOrder()
	const address = data?.order?.address && Object.values(JSON.parse(data?.order?.address)).join(", ")

	const handleCancle = () => {
		cancelOrder({
			id : id,
			setCancelStatus : setCancelStatus,
		})
	}

	const handleEdit = () => {
		navigate('/user/order/edit-address/'+id)
	}

	useEffect(() => {
		if(cancelStatus === 204){
			navigate('/pos')
		}
	},[cancelStatus])

	return (
		<section id="order-confimation">
			{error === 401 || error === 404 ? (
				<h3 className="h-[100vh] bg-slate-600">There is no page</h3>
			) : data ? (
				<div className="md:px-10 py-10 flex flex-col lg:flex-row gap-8 lg:gap-2">
					<div className='bg-white shadow-lg w-full lg:w-[28rem] px-8 py-8 rounded-md flex-none'>
						<div className='title my-2'>
							<h3 className="text-green-500 text-xl font-bold">
							<FontAwesomeIcon icon={faCircleCheck} /> Order Comfirmed
							</h3>
						</div>
						<div className="text-slate-700">
							<p>Order id : {data.order?.id}</p>
							<p>Total Price : {data.order?.total_price} MMK</p>
							<p>FullFill : {data.order?.fullfill ? "delivered" : "pending"}</p>
							<p>Payment Method : {data.order?.payment}</p>

							<div>
								<h3 className='text-blue-600 font-bold text-xl my-4'>Deliver To</h3>
								<div>
									<p className="text-slate-600 my-2">
										<FontAwesomeIcon 
											icon={faPhone} 
											className="text-red-500 pe-4"
										/>
										<span className="text-justify font-bold">
											Telephone No.
										</span>
									</p>

									<p>{data?.order?.phone}</p>
								</div>
								<div>
									<p className="text-slate-600 my-2">
										<FontAwesomeIcon 
											icon={faLocationDot} 
											className="text-red-500 pe-4"
										/>
										<span className="text-justify font-bold ">
											Location
										</span>
									</p>
									<p>{address}</p>
								</div>
							</div>

							<div className="button mt-4 flex gap-2">
								<button
									onClick={handleCancle}
									className="bg-red-500 text-white px-4 py-1 hover:bg-red-800"
									type="button"
								>Cancel
								</button>

								<button
									onClick={handleEdit}
									className="bg-slate-800 text-white px-4 py-1 hover:bg-slate-600"
									type="button"
								>Edit Order Address
								</button>

							</div>
						</div>
					</div>
					<div className="flex-1 px-8">
						<h3 className="text-blue-600 font-bold text-xl">Your Ordered Products List</h3>
						<div>
							{products && products.map(product => (
								<CartItem
									key={product.id}
									image={product.image}
									name={product.name}
									product_code={product.product_code}
									quantity = {product.pivot.quantity}
									totalPrice = {product.price * product.pivot.quantity}
								/>
							))}
						</div>
					</div>
				</div>

			) : (
				<h3>loading</h3>
			)}

		</section>
	)
}

export default Confirmation


