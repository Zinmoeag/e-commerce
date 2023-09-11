import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (cleanData) => {
        console.log(cleanData);
    };

    return (
        <div>
            <div className="login text-sm pt-10 h-[100vh] flex items-center px-10 text-slate-600">
                <div className="w-[25rem] md:w-[30rem] text-sm px-4 py-2">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold uppercase mb mb-1">
                            Login
                        </h3>
                        <p className="bg-slate-400 text-white py-1 px-2">
                            Log in your account to participate
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="flex flex-col gap-4">
                            <Input
                                {...register("email", {
                                    required: "This filled Must be filled",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:
                                            "Your Email is not valid format",
                                    },
                                })}
                                label="Your Email"
                                type="text"
                                placeholder="Enter Email"
                                error={errors.email || {}}
                            />

                            <Input
                                {...register("password", {
                                    required: "This field must be filled",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Characters must be included atleast 8",
                                    },
                                })}
                                label="password"
                                type="text"
                                placeholder="password"
                                error={errors.password || {}}
                            />

                            <a href="/guest/forgot-password">
                                Forgot Password?
                            </a>

                            <button
                                type="submit"
                                className="bg-slate-700 hover:bg-slate-600 px-4 py-2 text-white my-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
