import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);

    return (
        <section className='mt-16'>
            <h4 className='text-xl font-bold text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}</h4>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6'>
                {appointmentOptions.map(appointmentOption => <AppointmentOption
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                >
                </AppointmentOption>)}
            </div>
            {
                treatment && <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;