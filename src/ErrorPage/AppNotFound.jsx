import React from "react";
import appError from "../assets/App-Error.png";
import { Link } from "react-router";
function AppNotFound() {
  return (
    <div>
      <div className="flex justify-center my-2">
        <img src={appError} alt="" />
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-4xl text-center font-bold">OPPS!! APP NOT FOUND</h2>
        <p className="text-md text-gray-400 text-center">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to='/' className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg text-white font-semibold">
        Go Back
        </Link>
      </div>
    </div>
  );
}

export default AppNotFound;
