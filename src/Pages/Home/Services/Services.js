import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]
    return (
        <div className='mt-[149px] text-center'>
            <h4 className='font-bold text-xl text-secondary'>Our Services</h4>
            <h2 className='mb-[70px] text-4xl text-accent'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;