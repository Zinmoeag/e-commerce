import { faEye } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react'
import IconBtn from '../../../Components/IconBtn'
import {useNavigate} from 'react-router-dom'
import useOrder from '../../../Hooks/useOrder'

const OrderItem = ({id,date,fullfill,total}) => {

	const navigate = useNavigate();
	const {cancelOrder} = useOrder();
	const [cancelStatus, setCancelStatus] = useState(null);
	const handleRedirectToConfirmation = (id) => {
		navigate(`/user/order/confirmation/${id}`)
	}

	useEffect(() => {
		if(cancelStatus === 204){
			navigate(0)
		}
	},[cancelStatus])

	const handleCancle = () => {
		cancelOrder({
			id : id,
			setCancelStatus : setCancelStatus,
		})
	}


	return (
		<>
			 <tr>
	              <td className="px-2 py-4 whitespace-no-wrap">
	                {id}
	              </td>
	              <td className="px-2 py-4 whitespace-no-wrap">
	                {date}
	              </td>
	             <td className="px-2 py-4 whitespace-no-wrap">
	                {fullfill ? "delivered" : 'pending'}
	              </td>
	              <td className="px-2 py-4 whitespace-no-wrap">
	                {total} MMK
	              </td>

	              <td className="px-2 py-4 whitespace-no-wrap">
	          		{!fullfill ? (
	          			<div className="flex items-center">
		              		<div className="mx-2">
								<IconBtn
									icon={faEye}
									onClick={() => handleRedirectToConfirmation(id)}
								/>
		              		</div>

		        			<p>|</p>

		        			<button
		        			onClick={handleCancle}
		        			className="text-red-500 hover:text-red-800 px-2 py-1"
		        			>Cancel
		        			</button>
	          			</div>
	          		) : (
	          			<div className="text-green-500">Delievered</div>
	          		)}
	              </td>
            </tr>
		</>
	)
}

export default OrderItem;