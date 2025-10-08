import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { addToStoreDB } from "../../utility/addToDB";
import { getStoreInstalledApp } from "../../utility/addToDB";

function AppDetails() {
  const appDetails = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  const singleData = appDetails.find((d) => d.id === appId);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleData;

  const reversedRatings = [...ratings].reverse();

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getStoreInstalledApp();
    if (installedApps.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);

  const handleInstalled = (id) => {
    addToStoreDB(id);
    setIsInstalled(true);
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto my-5 gap-3 p-2">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-64 h-auto rounded-xl object-cover"
          />
        </figure>

        <div className="w-full p-4">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p className="text-md text-gray-500 font-semibold">
            Developed by <span className="text-[#632EE3]">{companyName}</span>
          </p>

          <div className="flex items-center gap-12 mt-12 border-t-2 border-gray-300 pt-4">
            <div className="flex flex-col items-center">
              <img src={downloadIcon} alt="" className="w-12" />
              <p className="text-xl font-bold">{downloads}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ratingIcon} alt="" className="w-12" />
              <p className="text-xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={reviewIcon} alt="" className="w-12" />
              <p className="text-xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={() => handleInstalled(appId)}
            disabled={isInstalled}
            className={`px-6 py-3 font-semibold rounded-lg mt-3 ${
              isInstalled
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#00D390] text-white hover:bg-[#00b57e]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10 container mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-3 pl-6">
          Ratings
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={reversedRatings}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
            />
            <Bar dataKey="count" fill="#FF8811" barSize={35} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="container mx-auto my-3 p-4">
        <p className="text-md text-[#627382]">Description: {description}</p>
      </div>
    </div>
  );
}

export default AppDetails;
