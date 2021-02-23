import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex w-full h-20 justify-around items-center bg-red-400 text-white">
      {/* Logo and Website name */}
      <div className="flex items-center">
        <svg
          className="w-10 h-10 mr-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <h1 className="text-lg font-semibold uppercase">Outfit Recommender</h1>
      </div>
      {/* Links */}
      <div>
        <Link className="mx-10" to="/garments">
          Garments
        </Link>
        <Link className="mx-10" to="/moods">
          Moods
        </Link>
        <Link className="mx-10" to="/outfits">
          Outfits
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
