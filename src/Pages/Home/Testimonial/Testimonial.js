import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winston Henry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
        {
            id: 2,
            name: 'Winston Henry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
        {
            id: 3,
            name: 'Winston Henry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        }
    ]

    return (
        <section className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl font-bold text-secondary'>Testimonial</h4>
                    <h1 className='text-accent font-semibold text-3xl'>What Our Patients Say</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;