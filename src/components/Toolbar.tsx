// src/components/Toolbar.tsx
import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 z-10">
      {/* Top Toolbar Row (Tool bar text, Hide fields, Sort, Filter, Cell view, Import, Export, Share, New Action) */}
      <div className="p-2 flex items-center justify-between">
        {/* Left-aligned buttons */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="flex items-center px-3 py-1 text-gray-700 font-semibold">
            Tool bar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </span>

          {[
            {
              label: 'Hide fields',
              iconPath:
                'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-2.673m0 0l1.563 2.673m-1.563-2.673A9.97 9.97 0 012.457 12c1.275-4.057 5.065-7 9.543-7a9.97 9.97 0 013.793.68M19.543 12c-1.275 4.057-5.065 7-9.543 7a9.97 9.97 0 01-3.793-.68m0 0L13.875 18.825m-1.563-2.673A9.97 9.97 0 0121.543 12c-1.275-4.057-5.065 7-9.543 7a9.97 9.97 0 01-3.793-.68',
            },
            {
              label: 'Sort',
              iconPath: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
            },
            {
              label: 'Filter',
              iconPath:
                'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
            },
            {
              label: 'Cell view',
              iconPath:
                'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
            },
          ].map(({ label, iconPath }) => (
            <button
              key={label}
              aria-label={label}
              className="flex items-center px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
              </svg>
              {label}
            </button>
          ))}
        </div>

        {/* Right-aligned buttons */}
        <div className="flex items-center space-x-2 text-sm">
          {[
            // Reordered as per image: Import, Export, Share
            {
              label: 'Import',
              iconPath:
                'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
              rotate: false, // Removed rotation as per image
            },
            {
              label: 'Export',
              iconPath:
                'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
            },
            {
              label: 'Share',
              iconPath:
                'M8.684 13.342C8.882 13.064 9 12.735 9 12c0-.735-.118-1.064-.316-1.342m0 2.684L12 15l3-3m0 0l-3-3m0 3h7m-7 0a6 6 0 11-12 0 6 6 0 0112 0z',
            },
          ].map(({ label, iconPath, rotate }) => (
            <button
              key={label}
              aria-label={label}
              className="flex items-center px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg
                className={`w-4 h-4 mr-1 ${rotate ? '' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
              </svg>
              {label}
            </button>
          ))}

          <button
            aria-label="New Action"
            className="flex items-center bg-gobGreen text-white px-4 py-2 rounded-md font-medium hover:bg-gobDarkGreenHover transition-colors ml-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Action
          </button>
        </div>
      </div>

      {/* Q3 Financial Overview and AI Action Bar Row - NO bottom border to visually merge with the row below*/}
      {/* Removed distinct backgrounds for inner elements as per "all rows within same box" */}
      <div className="px-4 py-2 flex items-center justify-between bg-gray-50">
        {/* Q3 Financial Overview part - Removed bg-gray-100 */}
        <div className="flex items-center space-x-1 text-gray-800 text-sm font-medium px-3 py-1 rounded-md">
          {/* File Sharing / Link Icon (Heroicons 'link') */}
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.333.753l-1.757 1.757a4.5 4.5 0 01-6.364 6.364l-4.5-4.5a4.5 4.5 0 01-1.242-7.244"></path>
          </svg>
          <span>Q3 Financial Overview</span>
          {/* Small red circle with line through it icon */}
          <svg className="w-4 h-4 ml-1 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        {/* AI Action Bar elements - Removed distinct backgrounds */}
        <div className="flex items-center space-x-2">
          {/* ABC */}
          <button className="flex items-center text-green-700 text-sm px-3 py-1 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 15L12 11.25M15.75 15L12 11.25M12 18V2.25"></path>
            </svg>
            ABC
            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>

          {/* Answer a question */}
          <button className="flex items-center text-purple-700 text-sm px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12h.008v.008H6.75V12zm12 0h.008v.008H18.75V12zm-6 0h.008v.008H12.75V12z"></path>
            </svg>
            Answer a question
          </button>

          {/* Extract */}
          <button className="flex items-center text-orange-700 text-sm px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12h.008v.008H6.75V12zm12 0h.008v.008H18.75V12zm-6 0h.008v.008H12.75V12z"></path>
            </svg>
            Extract
          </button>

          {/* Plus button */}
          <button className="p-1 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
        </div>
      </div>

      {/* Spreadsheet Header Row - Visually merged with the row above, with vertical borders for columns*/}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center text-sm font-medium text-gray-600">
        <div className="w-12 border-r border-gray-200 pr-2">#</div>
        <div className="flex-1 min-w-[120px] flex items-center border-r border-gray-200 pr-2">Job Request <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[100px] flex items-center border-r border-gray-200 pr-2">Submitted <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[80px] flex items-center border-r border-gray-200 pr-2">Status <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[100px] flex items-center border-r border-gray-200 pr-2">Submitter</div>
        <div className="flex-1 min-w-[80px] flex items-center border-r border-gray-200 pr-2">URL <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[100px] flex items-center bg-green-100 border-r border-gray-200 pr-2">Assigned <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[80px] flex items-center bg-purple-100 border-r border-gray-200 pr-2">Priority <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
        <div className="flex-1 min-w-[100px] flex items-center border-r border-gray-200 pr-2">Due Date</div>
        <div className="flex-1 min-w-[100px] flex items-center bg-orange-100">Est. Value <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div>
      </div>
    </div>
  );
};

export default Toolbar;