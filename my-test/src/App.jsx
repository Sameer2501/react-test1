import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Card from './components/Card';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
        
      </div>
    ),
  },
  {
    path: '/Dashboard',
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
