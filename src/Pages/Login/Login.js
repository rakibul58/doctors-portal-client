import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='px-6'>
            <div className="w-full max-w-sm p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-24 shadow-xl">
                <div>
                    <h2 className='text-xl font-bold text-accent text-center mb-6'>Login</h2>
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleLogin)}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 font-bold">Email</label>
                            <input {...register("email", { required: "Email is Required" })} type="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                            {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 font-bold">Password</label>
                            <input {...register("password", { required: "Password is required" , minLength: {value: 6 , message: "Password must be 6 words or longer"} })} type="password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                            {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                            <div className="flex justify-start text-xs text-gray-600 hover:text-opacity-80">
                                <Link href="#">Forgot Password?</Link>
                            </div>
                        </div>

                        <input className='btn btn-accent w-full' type="submit" value='Login' />
                        <p className='text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary hover:text-opacity-80'>Create new account</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent uppercase w-full my-3">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;