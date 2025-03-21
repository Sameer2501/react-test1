import React from 'react';
import { FaEye, FaEdit } from 'react-icons/fa';

const CustomerCard = ({ customer }) => {
  return (
    <div className="px-6 py-4 w-3/4 flex justify-between items-center border-b border-gray-300">
      {/* Left: Customer Info */}
      <div className="flex items-center gap-3">
        <img 
          src={customer.avatar} 
          alt={customer.name} 
          className="h-10 w-10 rounded-full" 
        />
        <p>{customer.name}</p>
      </div>
      
      
      <p className="texti9-gray-600">{customer.lastInvoice}</p>

      {/* Right: Actions */}
      <div className="flex gap-3 text-gray-500">
        <FaEye className="cursor-pointer hover:text-blue-500" title="View" />
        <FaEdit className="cursor-pointer hover:text-green-500" title="Edit" />
      </div>
    </div>
  );
};

export default CustomerCard;
