import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <section className='mt-36' style={{ background: `url(${appointment})` }}>
            <form className='flex flex-col justify-center items-center gap-4 py-[70px]'>
                <h4 className='text-xl font-bold text-secondary'>Contact Us</h4>
                <h1 className='text-3xl font-semibold text-white mb-10'>Stay connected with us</h1>
                <input type="text" placeholder="Email Address" className="input w-48 md:w-96" />
                <input type="text" placeholder="Subject" className="input w-48 md:w-96" />
                <textarea className="textarea md:w-96 h-32 w-48 mb-5" placeholder="Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </section>
    );
};

export default ContactUs;