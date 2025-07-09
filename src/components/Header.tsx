import React from 'react';

const Header: React.FC = () => {
  return (
    // The header itself has a bottom border and padding
    <header className="bg-white border-b border-gray-200 p-3 shadow-sm z-10">
      {/* This div contains all the top row content of the header */}
      {/* Removed 'pb-3 border-b border-gray-200' from this inner div to avoid double border/padding */}
      <div className="flex items-center justify-between">
        {/* Breadcrumbs with icon and adjusted text colors */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          {/* Workspace Icon */}
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>
          <span className="text-gray-500">Workspace</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-500">Folder 2</span>
          <span className="text-gray-400">&gt;</span>
          <span className="font-semibold text-gray-700">Spreadsheet 3</span>
          {/* Three dots icon */}
          <span className="ml-1 text-gray-400">...</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-8 pr-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-focusRingBlue placeholder-gray-500 bg-gray-50"
              onClick={() => console.log('Search input clicked')}
            />
            {/* Search icon */}
            <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>

          {/* Notification Icon */}
          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors" onClick={() => console.log('Notifications clicked')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.004 2.004 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0v2"></path></svg>
          </button>

          <div className="flex items-center space-x-2">
            {/* Profile Picture */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Profile"
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <span className="text-sm font-medium">John Doe</span>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => console.log('Profile dropdown clicked')}>
                {/* Arrow down icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;