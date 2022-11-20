import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-secondary text-xl font-bold">{name}</h2>
                    <p>{slots[0] ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length ? slots.length : 'No'} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white' htmlFor='booking-modal'
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;