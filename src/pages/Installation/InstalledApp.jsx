import React from "react";
import downloadImg from "../../assets/icon-downloads.png"

import ratingImg from '../../assets/icon-ratings.png'
function InstalledApp({ installedApp,removeApp }) {
  // console.log(installedApp)
  const { image, title, size, downloads, ratingAvg,id } = installedApp;
  return (
    <div className="flex flex-wrap items-center justify-between p-4 container mx-auto my-2 rounded-lg shadow-lg ">
    <div className="flex items-center gap-5 ">
      <div>
        <img src={image} alt="" className="w-12"/>
      </div>
      <div>
        <p>{title}</p>
        <div className="flex items-center gap-6">
         <div className="flex items-center gap-2">
          <img src={downloadImg} alt="" className="w-5"/>
           <p className="text-lg">{downloads}</p>
         </div>
          <div className="flex items-center gap-2">
            <img src={ratingImg} alt="" className="w-5"/>
            <p className="text-lg">{ratingAvg}</p>
          </div>
          <div>
            <p className="text-lg text-gray-500">{size}MB</p>
          </div>
        </div>
      </div>
      
    </div>
      <button
      onClick={()=>removeApp(id)}
      className="px-4 py-2 bg-[#00D390] text-white font-bold rounded-lg cursor-pointer">Uninstall</button>
    </div>
  );
}

export default InstalledApp;
