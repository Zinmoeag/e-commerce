import OrderItem from './OrderItem'

const OrderList = () => {
	return (
		<>
			<section id="order-list">
				<div className="my-4">
				    <h3 className="uppercase text-xl text-slate-800">Your Order List</h3>
				    <p className="text-sm text-slate-600">Here is the list of Your Order.</p>
				</div>
				<div className="">
					<div className="pt-4">
					    <div className="lg:w-[45rem] w-[100%] flex items-center justify-center md:text-md text-sm">
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
					              Payment Status
					            </th>
					            <th className="px-2 py-3 bg-slate-400 text-left leading-4 font-medium text-white uppercase tracking-wider">
					              Total Amount
					            </th>
					          </tr>
					        </thead>
					        <tbody className="bg-slate-100 text-slate-600 divide-y divide-gray-200">
					       		<OrderItem 
					  				id={"46546"}
					  				date="25-5-2023"
					  				paymentStatus="Paid"
					  				total="9999 Ks"
					       		/>
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