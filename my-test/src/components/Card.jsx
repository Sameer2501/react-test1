import React from 'react'

const Card = ({Name , Job_Profile , Description , Img_url}) => {
  return (
    <div className='w-[800px]  flex flex-wrap justify-center'>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <img src={Img_url} alt="User" className="w-full h-32 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-2">{Name}</h2>
            <p className="text-gray-600">{Job_Profile}</p>
            <p className="text-sm mt-1">{Description}</p>
          </div>
      </div>
    </div>
  )
}

export default Card