import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}}>
            <div className="hero mt-44">
                <div className="hero-content flex-col lg:flex-row p-8 lg:p-0 lg:pr-8">
                    <img alt='' src={doctor} className="-mt-[115px] hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h4 className='text-xl text-secondary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-semibold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;