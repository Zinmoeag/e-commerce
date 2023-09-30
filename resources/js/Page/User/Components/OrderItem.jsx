const OrderItem = ({id,date,fullfill,total}) => {
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
	                {fullfill}
	              </td>
	              <td className="px-2 py-4 whitespace-no-wrap">
	                {total}
	              </td>
            </tr>
		</>
	)
}

export default OrderItem;