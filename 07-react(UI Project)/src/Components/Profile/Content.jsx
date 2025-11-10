import React from 'react';

function Content() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-5 md:space-y-0 p-5 text-center md:text-left">
      
      
      <div>
        <img
          className="h-24 w-24 md:h-32 md:w-32 object-cover rounded-full mx-auto md:mx-0"
          src="https://images.unsplash.com/photo-1674733411437-c6c1501a88c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="Profile"
        />
      </div>

     
      <div>
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Presentation Design
        </h1>
        <p className="text-base md:text-xl text-gray-700 mt-2">
          For orders, message on Telegram: <span className="font-semibold text-blue-500">@SashaS45</span>
        </p>
      </div>
    </div>
  );
}

export default Content;
