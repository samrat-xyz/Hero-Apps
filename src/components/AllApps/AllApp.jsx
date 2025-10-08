import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";
function AllApp({ app }) {
  const { image, title, downloads, ratingAvg,id } = app;
  return (
    <Link to={`/app-details/${id}`}>
      <div className="rounded-lg shadow-xl p-4">
        <div className=" h-64 flex items-center justify-center my-2 p-3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-lg">{title}</h2>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <p className="flex items-center text-sm text-[#00D390]">
              <img src={downloadIcon} alt="" className="w-4 h-4 mr-1" />
              {downloads}
            </p>
            <p className="flex items-center text-sm text-[#FF8811]">
              <img src={ratingIcon} alt="" className="w-4 h-4 mr-1" />
              {ratingAvg}
            </p>
          </div>
        </div>
      </div>
     </Link>
  );
}

export default AllApp;
