import UserInfoForm from './components/UserInfoForm'
import withAuth from '../../Utilities/withAuth'
import {useState, useEffect} from 'react'
import useFetcher from '../../Hooks/useFetcher'
import {useParams} from 'react-router-dom'
import {getOrder, editOrderAddressApi} from '../../Api/apiUrl'
import useOrder from '../../Hooks/useOrder'
import {useNavigate} from 'react-router-dom'
import NotFound from '../../Page/Error/NotFound'

const OrderEditAddress = ({authUser, authStatus}) => {
    const [returnError, setReturnError] = useState({});
    const [err, setErr] = useState(null);
    const [status, setStatus] = useState(null);
    const {id} = useParams()
    const url = getOrder(id);
    const {editOrderAddress} = useOrder()
    const navigate = useNavigate()

    const {data,loading,error} = useFetcher(url)
    const {order} = data || {};

    const onSubmit = (cleanData) => {
		const info = {
			phone : cleanData.phone,
			payment : cleanData.payment,
			address : JSON.stringify({
				city:cleanData.city, 
				country:cleanData.country, 
				address:cleanData.address,
			}),
		}

    	editOrderAddress({
    		id: id,
    		info : info,
    		setError : setErr,
    		setStatus : setStatus
    	})
    }

    useEffect(() => {
    	if(error === 401){
    		navigate("/pos")
    	}
    },[error])

    useEffect(() => {
    	if(status === 200){
    		navigate(`/user/order/confirmation/${id}`)
    	}
    },[status])

 	return (
		<section>
			{order ? (		
				<div className="px-20 py-10">
					<UserInfoForm 
						authUser = {authUser}
						onSubmit = {onSubmit}
						returnError = {returnError}
						previousData = {order}
					/>
				</div>
			) : error === 404 ? (
				<NotFound />
			) : (
				<div>Wait a moment ... </div>
			)}
		</section>
	)
}

export default withAuth(OrderEditAddress);