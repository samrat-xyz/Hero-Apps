import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreInstalledApp, removeFromStore } from "../../utility/addToDB";
import InstalledApp from "./InstalledApp";

function Installation() {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  console.log(data);
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
  return (
    <div className="min-h-64">
      <div className="flex flex-col items-center space-y-3 my-7">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-md text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <h3 className="text-2xl font-bold pl-8">({appList.length})Apps Found</h3>
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
