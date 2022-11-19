import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    };

                    fetch('http://localhost:5000/doctors',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast(`${data.name} Added Successfully`);
                        navigate('/dashboard/managedoctors')
                    });
                }
            });
    }

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='px-6'>
            <div className="w-full max-w-sm p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mb-24 shadow-xl">
                <div>
                    <h2 className='text-xl font-bold text-accent text-center mb-6'>Sign Up</h2>
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-gray-600 font-bold">Name</label>
                            <input placeholder='Doctor Name' {...register("name", { required: "Name is Required" })} type="text" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 font-bold">Email</label>
                            <input placeholder='
                            Doctor Email' {...register("email", {
                                required: "Email is Required"
                            })} type="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="specialty" className="block text-gray-600 font-bold">Specialty</label>
                            <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                                {
                                    specialties.map(specialty => <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >
                                        {specialty.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-gray-600 font-bold">Photo</label>
                            <input placeholder='Doctor Name' {...register("image", { required: "Image is Required" })} type="file" className="w-full px-4 py-8 rounded-md border-dotted border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600 border-4" />
                        </div>
                        <input className='btn btn-accent w-full' type="submit" value='Add Doctor' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;