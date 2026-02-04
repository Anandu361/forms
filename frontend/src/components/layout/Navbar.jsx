import React from 'react';
import { Menu, Search, Grid, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 bg-white z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center">F</div>
          <span className="text-xl font-normal text-gray-600 hidden sm:block">Forms</span>
        </div>
      </div>

      <div className="flex-grow max-w-2xl px-4 hidden sm:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200 focus:shadow-md transition-all sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hidden sm:block">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-blue-100 rounded-full text-blue-700 flex items-center justify-center font-semibold border border-blue-200 ml-2">
          U
        </div>
      </div>
    </div>
  );
};

export default Navbar;
