import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0e0e10] text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">HERO.IO</h2>
          <p className="text-sm leading-relaxed">
            We craft innovative & productive apps designed to make your everyday
            life simpler, smarter, and more exciting.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xl">
            <Link className="hover:text-purple-400"><FaFacebook /></Link>
            <Link className="hover:text-purple-400"><FaTwitter /></Link>
            <Link className="hover:text-purple-400"><FaLinkedin /></Link>
            <Link className="hover:text-purple-400"><FaGithub /></Link>
          </div>
        </div>

        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col items-center space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/apps" className="hover:text-purple-400">Apps</Link></li>
            <li><Link to="/installation" className="hover:text-purple-400">Installation</Link></li>
            
          </ul>
        </div>

        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-3">
            Get the latest updates, app releases, and exclusive offers!
          </p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg text-gray-500 border sm:rounded-l-lg sm:rounded-r-none"
            />
            <button
              
              className="bg-purple-600 px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none text-white hover:bg-purple-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-purple-400">HERO.IO</span> — All Rights Reserved.
        </p>
        <p className="mt-1">Crafted with by the HERO.IO Team</p>
      </div>
    </footer>
  );
}

export default Footer;
