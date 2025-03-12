import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-[40px] w-full bg-red-300 text-white flex items-center px-4'>
      <ul className='flex gap-4'>
        <li>
          <Link to='/' className='hover:text-gray-300 font-bold'>Home</Link>
        </li>
        <li>
          <Link to='/Dashboard' className='hover:text-gray-300 font-bold'>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;