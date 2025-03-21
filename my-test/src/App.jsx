// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import Card from './components/Card';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         <Navbar />
//         <Home />
        
//       </div>
//     ),
//   },
//   {
//     path: '/Dashboard',
//     element: (
//       <div>
//         <Navbar />
//         <Dashboard />
//       </div>
//     ),
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
// 

//PROP DRILLING :--
// import React from 'react'
// import ChildA from './components/ChildA'
// const App = () => {
//   const name ="Hello Code"
//   return (
//     <>
//     <div className='text-center text-blue-400'>App</div>
//     <ChildA name={name}/>
//     </>
//   )
// }

// export default App


// random Cunstomer Information Mapping:-
import React from 'react'
// import CustomerCard from './components/CustomerCard'
import CustomerList from './components/CustomerList'

const App = () => {
  return (
    <div>
      <CustomerList/>

    </div>
  )
}

export default App