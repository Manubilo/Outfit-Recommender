import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex h-20 justify-around items-center bg-red-400 text-white">
      {/* Logo and Website name */}
      <div>
        <h1 className="text-lg">Outfit Recommender</h1>
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
