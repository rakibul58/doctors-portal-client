import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const DentalCare = () => {
    return (
        <div className='mt-36'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-x-24 gap-y-5">
                    <img alt='' src={treatment} className="w-full lg:max-w-[458px] rounded-lg shadow-2xl" />
                    <div className='px-10 lg:px-0'>
                        <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;