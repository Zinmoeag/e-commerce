import {useEffect, useState} from 'react'
import OrderItem from './OrderItem'
import useOrder from '../../../Hooks/useOrder'

const OrderList = () => {

	const {getOrder} = useOrder()
	const [order, setOrder] = useState();

	useEffect(() =>{
		getOrder({setOrder})
	},[])


	return (
		<>
			<section id="order-list">
				<div className="my-4">
				    <h3 className="uppercase text-xl text-slate-800">Your Order List</h3>
				</div>
				<div className="">
					<div className="pt-4">
				    	<h3 className="text-blue-700 text-sm mb-4">Filter</h3>
					    <div className="lg:w-[45rem] w-[100%] flex md:text-md text-sm">
					      <table className="divide-y divide-gray-200 w-full">
					        <thead>
					          <tr>
					            <th className="px-2 py-3 bg-slate-400 text-left leading-4 font-medium text-white uppercase tracking-wider">
					              Order ID
					            </th>
					            <th className="px-2 py-3 bg-slate-400 text-left leading-4 font-medium text-white uppercase tracking-wider">
					              Order Date
					            </th>
					            <th className="px-2 py-3 bg-slate-400 text-left leading-4 font-medium text-white uppercase tracking-wider">
					              FullFill
					            </th>
					            <th className="px-2 py-3 bg-slate-400 text-left leading-4 font-medium text-white uppercase tracking-wider">
					              Total Amount
					            </th>
					          </tr>
					        </thead>
					        <tbody className="bg-slate-100 text-slate-600 divide-y divide-gray-200">

					        	{order && order?.length > 0 ? order.map(item => (
						       		<OrderItem
						       			key={item.id}
						  				id={item.id}
						  				date={item.order_date}
						  				fullfill={item.fullfill ? "delivered" : 'pending'}
						  				total={item.total_price}
						       		/>
					        	)) : (
					        		<tr>
					        			<td>
							        		There is no item
					        			</td>
					        		</tr>
					        	)}
					        </tbody>
					      </table>
					    </div>
					</div>
				</div>
			</section>

		</>
	)
}


export default OrderList;