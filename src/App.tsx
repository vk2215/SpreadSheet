import React, { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';
//import { MOCK_DATA, JobRequest } from './types'; // Import mock data
import { MOCK_DATA, type JobRequest } from "./types/types.ts";

function App() {
  // State for the spreadsheet data if you need to modify it later
  const [data, setData] = useState<JobRequest[]>(MOCK_DATA);

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
     

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        <Header />
        {/*<Toolbar />*/}
        <Spreadsheet data={data} /> {/* Pass data to the Spreadsheet component */}
      </div>
    </div>
  );
}

export default App;