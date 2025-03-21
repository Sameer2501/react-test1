// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className='h-[40px] w-full bg-red-300 text-white flex items-center px-4'>
//       <ul className='flex gap-4'>
//         <li>
//           <Link to='/' className='hover:text-gray-300 font-bold'>Home</Link>
//         </li>
//         <li>
//           <Link to='/Dashboard' className='hover:text-gray-300 font-bold'>Dashboard</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='px-[20px] py-[30px] bg-slate-800 text-lg text-white flex justify-between'>
      <div>Logo</div>
      <ul className='flex gap-6 '>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/Admin'>Admin</Link></li>
        <li><Link to ='/Dashboard'>Dashboard</Link></li>
      </ul>
    </div>
  )
}

export default Navbar