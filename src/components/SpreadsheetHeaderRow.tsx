import React from 'react';

const SpreadsheetHeaderRow: React.FC = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
      <div className="flex items-center"> {/* Main row container */}

        {/* Left-aligned column headers with borders */}
        {/* Using specific widths and flex-shrink-0 for better visual alignment like in the image */}
        <div className="flex-shrink-0 flex">
          {/* # Column - fixed width */}
          <div className="w-12 px-4 py-2 flex-shrink-0 border-r border-gray-200 flex items-center justify-center">#</div>

          {/* Job Request */}
          <div className="w-40 px-4 py-2 flex items-center border-r border-gray-200">
            Job Request
            <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Submitted */}
          <div className="w-32 px-4 py-2 flex items-center border-r border-gray-200">
            Submitted
            <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Status */}
          <div className="w-28 px-4 py-2 flex items-center border-r border-gray-200">
            Status
            <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Submitter */}
          <div className="w-32 px-4 py-2 flex items-center border-r border-gray-200">
            Submitter
            <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* URL */}
          <div className="w-32 px-4 py-2 flex items-center border-r border-gray-200">
            URL
            <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Right-aligned headers and buttons, filling remaining space */}
        <div className="flex-1 flex justify-end items-center pr-4"> {/* flex-1 to take remaining space, justify-end to push content right, pr-4 for padding */}
          {/* Assigned */}
          <div className="px-4 py-2 flex items-center border-r border-gray-200 min-w-[100px]"> {/* min-w for consistent sizing */}
              Assigned
              {/* Up arrow icon */}
              <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          </div>

          {/* Priority */}
          <div className="px-4 py-2 flex items-center border-r border-gray-200 min-w-[80px]">
              Priority
              <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Due date */}
          <div className="px-4 py-2 flex items-center border-r border-gray-200 min-w-[100px]">
              Due date
              <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Est. Value */}
          <div className="px-4 py-2 flex items-center border-r border-gray-200 min-w-[100px]">
              Est. Value
              <svg className="w-3 h-3 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center pl-4 space-x-2"> {/* pl-4 for spacing before buttons */}
            {/* ABC Button */}
            <button className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-md font-medium text-xs whitespace-nowrap">
              {/* Up arrow icon for ABC */}
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              ABC
            </button>

            {/* Answer a question Button */}
            <button className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-md font-medium text-xs whitespace-nowrap">
              {/* Three dots icon */}
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01"></path></svg>
              Answer a question
            </button>

            {/* Extract Button */}
            <button className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-md font-medium text-xs whitespace-nowrap">
              {/* Three dots icon */}
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01"></path></svg>
              Extract
            </button>

            {/* Plus button at the very end */}
            <button className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full ml-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetHeaderRow;

export default App;