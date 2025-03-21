
  import React from 'react';
  import CustomerCard from './CustomerCard';
  import { FaRegUser, FaBook } from "react-icons/fa";
    const customers = [
    { id: 1, name: "John Doe", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 2, name: "Mark Evans", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 3, name: "Emily Clark", lastInvoice: "17/05/12", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 1, name: "John Doe", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 2, name: "Mark Evans", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 3, name: "Emily Clark", lastInvoice: "17/05/12", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 1, name: "John Doe", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 2, name: "Mark Evans", lastInvoice: "16/08/24", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
    { id: 3, name: "Emily Clark", lastInvoice: "17/05/12", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19ShkH7PLUJ3Zs3hkiKk9D1z1BtKGzuEVHQ&s" },
  ];
  
  const CustomerList = () => {
    return (
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-5">
        {/* Header */}
        <div className="px-6 py-4 w-3/4 flex justify-between border-b-2 border-blue-300 bg-gray-100">
          <div className="flex items-center gap-2">
            <FaRegUser />
            <p>Customer</p>
          </div> 
          <div className="flex items-center gap-2">
            <FaBook />
            <p>Last Invoice</p>
          </div>
          <p>Action</p>
        </div>
          
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    );
  };
  
  export default CustomerList;
  
