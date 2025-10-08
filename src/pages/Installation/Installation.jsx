import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreInstalledApp, removeFromStore } from "../../utility/addToDB";
import InstalledApp from "./InstalledApp";
import { IoMdArrowDropdownCircle } from "react-icons/io";

function Installation() {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sortType, setSortType] = useState(""); // high-low or low-high
  const [showDefaultText, setShowDefaultText] = useState(true); // show/hide "Sort By Size"

  useEffect(() => {
    const storeAppData = getStoreInstalledApp();
    const convertStoreApp = storeAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convertStoreApp.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  const removeApp = (id) => {
    const appFilter = appList.filter((app) => app.id !== id);
    setAppList(appFilter);
    removeFromStore(id);
  };

  // Sort handler
  const handleSort = (type) => {
    setSortType(type);
    setShowDefaultText(false);

    let sortedList = [...appList];
    if (type === "high-low") {
      sortedList.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    } else if (type === "low-high") {
      sortedList.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    }
    setAppList(sortedList);
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
        <h3 className="text-xl font-bold">
          ({appList.length}) Apps Found
        </h3>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-2">
            {showDefaultText ? (
              <div className="flex items-center gap-2">
                Sort By Size <IoMdArrowDropdownCircle />
              </div>
            ) : sortType === "high-low" ? (
              <p>Sorted: High → Low</p>
            ) : sortType === "low-high" ? (
              <p>Sorted: Low → High</p>
            ) : null}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleSort("high-low")}>
                High → Low
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("low-high")}>
                Low → High
              </button>
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
