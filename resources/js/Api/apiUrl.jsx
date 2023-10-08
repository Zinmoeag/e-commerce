export const brandApi = () => {
	return '/api/brand'
}

export const categoryApi = () => {
	return '/api/categories'
}

export const productApi = () => {
	return `/api/products/${type}/${query}`
}

export const productShowApi = (productCode) => {
	return `/api/products/${productCode}`
}


export const userOrderApi = () => {
	return `/api/orders`
}

//cart  
export const showCartApi = (token) => {
	return `/api/show/cart/${token}`
}

export const createCartApi = () => {
	return `/api/store/cart`
}

export const addItemCartApi = (token) => {
	return `/api/add/item/${token}`
}

export const removeItemCartApi = (token) => {
	return `/api/remove/item/${token}`
}

export const increaseItemApi = (token) => {
	return `/api/increment/qty/${token}`
}

export const decreaseItemApi = (token) => {
	return `/api/decrement/qty/${token}`
}

export const resetCartApi = (token) => {
	return `/api/reset/cart/${token}`
}

export const createBuyTokenApi = (productCode,quantity) =>{
	return `/api/buytoken/${productCode}?qty=${quantity}`
}		

export const getBuyingProductApi = (token) =>{
	return `/api/order/buy/${token}`
}

export const orderCreateApi = () => {
	return `/api/orders`
}

export const deleteOrder = (id) => {
	return `/api/orders/${id}`
}

export const checkConfirmation = (id) => {
	return `/api/orders/confirmation/${id}`
}

export const register = () => {
	return '/api/register'
}

export const login = () => {
	return '/api/login'
}

export const user = () => {
	return '/api/user'
}

export const userInfoUpdateApi = () => {
	return '/api/user/profile/store'
}

export const updatePasswordApi = () => {
	return '/api/user/password/update'
}

export const updateEmailApi = () => {
	return '/api/user/email/update'
}