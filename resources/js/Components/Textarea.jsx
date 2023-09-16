import React from 'react'

const Textarea = React.forwardRef(({name,label,placeholder,onChange,onBlur,error},ref) => {
	return (
		<>
			<label>{label}</label>
            <textarea
            	name={name}
            	ref={ref}
            	placeholder={placeholder}
            	onChange={onChange} 
				onBlur={onBlur}
                cols="30" 
                rows="5" 
                className="w-full px-2 py-2 my-2"
            >
            </textarea>

            {error && <p className="text-red-600">{error}</p>}
		</>
	)	
})

export default Textarea