import React from 'react';
import phoenix from '../../Images/phoenix.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout =() =>{
    signOut(auth);
  }
  
  const menuItems = <>
  <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/purchase'>Purchase Parts</Link></li> */}
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{ user ?<button className="btn btn-active btn-ghost" onClick={logout}>Sign Out</button> :<Link to='/login'>Login</Link>}</li>
  </>
    return (
        <div className="navbar bg-green-200 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <div className='flex ml-6 lg:mr-96'>
        <img src={phoenix} alt="" />
    <Link to='/' className="btn btn-ghost normal-case text-xl">Phoenix Tech</Link>
    </div>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
  
 
  
</div>
    );
};

export default Navbar;