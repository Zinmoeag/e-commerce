import { useForm } from "react-hook-form";

const Review = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const onSubmit = (cleandata) => {
    	console.log(cleandata)
    }


	return (
		<div>
			<h3 className="text-blue-900 text-lg">Review Us</h3>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex my-2">
					<input
			            {...register("review", {
		                    required: "This filled Must be filled",
		                    pattern: {
		                        value: /^[a-zA-Z0-9\s\-_.,!?]*$/,
		                        message:
		                            "Your review is not valid format",
		                    },
		                })}
						type="text" 
						className="w-full h-8 px-4 text-slate-800 outline-none"
						placeholder="review us"
					/>
					<button 
						type="submit"
						className="bg-slate-800 px-10 text-white hover:bg-slate-600"
					> Send
					</button>
				</div>
			</form>

			{errors.review && <p className="text-red-500">{errors.review.message}</p>}
		</div>
	)
}

export default Review;