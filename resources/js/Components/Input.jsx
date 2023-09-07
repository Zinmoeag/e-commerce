import React,{useState} from 'react'

const Input = React.forwardRef(({name,label,type,placeholder,error, onChange, onBlur},ref) => {

	return (
	<>
		<div className="flex flex-col w-full my-2">

			<label>{label}</label>
			<input
				name={name}
				ref={ref}
				onChange={onChange} 
				onBlur={onBlur}
				className="border-b-2 py-1 px-2 border-skin-coffee bg-skin-transparent w-full mt-2 outline-none"
				placeholder={placeholder}
				type={type}
			/>
			{error && <p className="text-red-600 mt-2">{error.message}</p>}
		</div>
	</>
)})



// const Input = ({label,type,placeholder}) => {
// 	return (
// 		<>
// 			<div className="flex flex-col w-full my-2">
// 				<label htmlFor="email">{label}</label>
// 				<input
// 				className="border-b-2 py-1 px-2 border-skin-coffee bg-skin-transparent w-full mt-2 outline-none"
// 				placeholder={placeholder}
// 				type={type} 
// 				/>
// 			</div>
// 		</>
// 	)
// }

export default Input;