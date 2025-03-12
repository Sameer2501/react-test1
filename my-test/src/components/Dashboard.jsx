import React from 'react'
import Card from './Card'
import {Data} from './Data.js'
const Dashboard = (props) => {
  return (
    <>
    {/* <div className='bg-blue-300 text-teal-50 text-center text-3xl h-screen'>User Card Information</div> */}
    <div className="w-2/3 mt-8 grid grid-cols-3 gap-4">
    {Data.map((user, index) => (
      <Card 
        key={index}
        Name={user.name} 
        Job_Profile={user.job} 
        Description={user.description} 
        Img_url={user.image} 
      />
    ))}
  </div>
    
  
    </>
  )
}

export default Dashboard