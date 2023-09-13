const OrderItem = ({id,date,paymentStatus,total}) => {
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
	                {paymentStatus}
	              </td>
	              <td className="px-2 py-4 whitespace-no-wrap">
	                {total}
	              </td>
            </tr>
		</>
	)
}

export default OrderItem;