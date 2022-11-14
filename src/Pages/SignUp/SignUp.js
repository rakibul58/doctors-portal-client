import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError , setSignUpError] = useState("");

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                toast.success('User Created Successfully.');
                setSignUpError("");

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error));

            })
            .catch(error => setSignUpError(error.message));
    }

    return (
        <div className='px-6'>
            <div className="w-full max-w-sm p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-24 shadow-xl">
                <div>
                    <h2 className='text-xl font-bold text-accent text-center mb-6'>Sign Up</h2>
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-gray-600 font-bold">Name</label>
                            <input {...register("name", { required: "Name is Required" })} type="text" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                            {errors.name && <p role="alert" className='text-error'>{errors.name?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 font-bold">Email</label>
                            <input {...register("email", {
                                required: "Email is Required"
                            })} type="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                            {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 font-bold">Password</label>
                            <input {...register("password", {
                                required: "Password is required",
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, message: "Password Must be strong" },
                                minLength: { value: 6, message: "Password must be 6 words or longer" },
                            })} type="password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                            {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                            <div className="flex justify-start text-xs text-gray-600 hover:text-opacity-80">
                                <Link href="#">Forgot Password?</Link>
                            </div>
                        </div>

                        <input className='btn btn-accent w-full' type="submit" value='Sign Up' />
                        {signUpError && <p className='text-error'>{signUpError}</p> }
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-secondary hover:text-opacity-80'>Login</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent uppercase w-full my-3">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;