import Input from '../../Components/Input'
import { useForm } from "react-hook-form";
import {useState} from 'react'

const Edit = () => {

	const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState({})

    const onSubmit = (cleanData) => {
    	console.log(cleanData)
    }
 
	return (
		<>
			<section id="user-edit">

				<div className="pt-4 px-8 text-slate-600">
					<div className="w-[28rem] h-[100vh]">
						<h3 className="text-2xl text-slate-600 uppercase mb-6">Update Your Information</h3>
						<form onSubmit={handleSubmit(onSubmit)}>

							 <Input
			                    {...register("name", {
			                        required: "This filled Must be filled", 
			                    })}
			                    label="Your name"
			                    type="text"
			                    placeholder="Update Your Display Name"
			                    error={errors.name ? errors.name.message : error ? error.name : null}
			                />

                            <Input
                                {...register("email", {
                                    required: "This filled Must be filled",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:
                                            "Your Email is not valid format",
                                    },
                                })}
                                label="Upadate Your Email"
                                type="text"
                                placeholder="Enter Email"
                                 error={errors.email ? errors.email.message : error ? error.email : null}
                            />



                            <label htmlFor="address">
                            	Add Your Address
                            </label>

                            <textarea name="address" id="" cols="30" rows="5" className="w-full px-2 py-2 my-2">
                            </textarea>


			                <button
			                	className="bg-white hover:bg-slate-400  border-2 border-slate-400 text-center w-full text-slate-800 mt-6 py-1 rounded-lg"
			                	type="submit"
			                >
			                	Update
			                </button>	
						</form>
					</div>
				</div>



			</section>
		</>
	)
}

export default Edit;