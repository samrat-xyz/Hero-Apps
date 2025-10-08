import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreInstalledApp, removeFromStore } from "../../utility/addToDB";
import InstalledApp from "./InstalledApp";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { toast } from "react-toastify";

function Installation() {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sortType, setSortType] = useState(""); 

  useEffect(() => {
    const storeAppData = getStoreInstalledApp();
    const convertStoreApp = storeAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convertStoreApp.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  const removeApp = (id) => {
    toast("Uninstalled App")
    const updatedList = appList.filter((app) => app.id !== id);
    setAppList(updatedList);
    removeFromStore(id);
  };

  const parseDownloads = (downloads) => {
    let num = parseFloat(downloads);
    if (downloads.toUpperCase().includes("M")) {
      num *= 1000000;
    } 
    return num;
  };

  const handleSort = (type) => {
    setSortType(type);
    setAppList((prevList) => {
      const sortedList = [...prevList];
      if (type === "high-low") {
        sortedList.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
      } else if (type === "low-high") {
        sortedList.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
      }
      return sortedList;
    });
  };

  return (
    <div className="min-h-64">
      <div className="flex flex-col items-center space-y-3 my-7">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-md text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between container mx-auto p-3">
        <h3 className="text-xl font-bold">({appList.length}) Apps Found</h3>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Downloads <IoMdArrowDropdownCircle />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("high-low")}>High-Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("low-high")}>Low-High</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {appList.map((installedApp) => (
          <InstalledApp
            installedApp={installedApp}
            key={installedApp.id}
            removeApp={removeApp}
          />
        ))}
      </div>
    </div>
  );
}

export default Installation;
