import React from "react";
import Navbar from "../../components/Navbar";

const DashboardHome: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar/>

        {/* Dashboard Content */}
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Analytics Card */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Total Mentions</h2>
              <p className="text-2xl font-bold mt-2">3,452</p>
              <p className="text-sm text-green-500 mt-1">+12% since last week</p>
            </div>

            {/* Engagement Card */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Engagement Rate</h2>
              <p className="text-2xl font-bold mt-2">7.4%</p>
              <p className="text-sm text-green-500 mt-1">+8% since last week</p>
            </div>

            {/* New Followers Card */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">New Followers</h2>
              <p className="text-2xl font-bold mt-2">876</p>
              <p className="text-sm text-red-500 mt-1">-3% since last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
