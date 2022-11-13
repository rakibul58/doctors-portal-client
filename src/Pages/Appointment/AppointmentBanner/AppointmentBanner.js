import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate , setSelectedDate}) => {
    
    return (
        <header style={{background: `url(${bg})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                    <img alt='' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        />
                    </div>
                    {/* <p>You Have Selected Date: {format(selectedDate , 'PP')}</p> */}
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;