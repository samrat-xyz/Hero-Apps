import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AllApp from "../../components/AllApps/AllApp";
import AppNotFound from "../../ErrorPage/AppNotFound";
import Loading from "../../components/Loading/Loading";

function Apps() {
  const apps = useLoaderData();
  const [searchApp, setSearchApp] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);

    const delay = setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
      );
      setFilteredApps(result);
      setIsSearching(false);
    }, 500); 

    return () => clearTimeout(delay);
  }, [searchApp, apps]);

  return (
    <div className="my-8 mx-auto container">
      <div className="space-y-4">
        <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
        <p className="text-sm text-center text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div>
          <h4>({filteredApps.length}) Apps Found</h4>
        </div>
        <fieldset className="fieldset mt-2 sm:mt-0">
          <input
            type="text"
            className="input"
            placeholder="Search Apps"
            value={searchApp}
            onChange={(e) => setSearchApp(e.target.value)}
          />
        </fieldset>
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Loading />
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-8 px-3">
          {filteredApps.map((app) => (
            <AllApp app={app} key={app.id} />
          ))}
        </div>
      ) : (
        <div className="col-span-full">
          <AppNotFound />
        </div>
      )}
    </div>
  );
}

export default Apps;
