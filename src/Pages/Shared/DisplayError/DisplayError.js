import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <p className='text-5xl text-red-600'>Something Went Wrong!!!</p>
            <p className='text-2xl text-red-400'>{error.statusText || error.message}</p>
            <h4>Please <button onClick={handleLogOut} className='btn btn-error'>Logout</button> and Log back in</h4>
        </div>
    );
};

export default DisplayError;