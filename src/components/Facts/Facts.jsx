import React from "react";

function Facts() {
  return (
    <div className="p-8 bg-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Trusted by Millions, Built for You
      </h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Total Downloads */}
        <div className="flex-1  p-4 rounded-lg text-center">
          <p >Total Downloads</p>
          <h4 className="text-6xl font-bold">29.6M</h4>
          <p className=" text-sm">21% more than last month</p>
        </div>

        {/* Total Reviews */}
        <div className="flex-1  p-4 rounded-lg text-center">
          <p >Total Reviews</p>
          <h4 className="text-6xl font-bold">906K</h4>
          <p className=" text-sm">46% more than last month</p>
        </div>

        {/* Active Apps */}
        <div className="flex-1  p-4 rounded-lg text-center">
          <p >Active Apps</p>
          <h4 className="text-6xl font-bold">132+</h4>
          <p className=" text-sm">31 more will launch</p>
        </div>
      </div>
    </div>
  );
}

export default Facts;
