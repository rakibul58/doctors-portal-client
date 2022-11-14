import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItems = <React.Fragment>
        <li><NavLink className="rounded-xl" to='/'>Home</NavLink></li>
        <li><NavLink className="rounded-xl" to='/appointment'>Appointment</NavLink></li>
        <li><NavLink className="rounded-xl" to='/about'>About</NavLink></li>

        {
            !user?.uid ?
                <li><NavLink className="rounded-xl" to='/login'>Login</NavLink></li>
                :
                <>
                    <li><NavLink className="rounded-xl" to='/dashboard'>Dashboard</NavLink></li>
                    <li><button onClick={handleLogOut} className="rounded-xl btn btn-accent text-white">Log Out</button></li>
                </>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="ml-auto hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;