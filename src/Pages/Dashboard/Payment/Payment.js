import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment , price , slot , appointmentDate} = booking;
    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <p className='text-xl'>Please Pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;