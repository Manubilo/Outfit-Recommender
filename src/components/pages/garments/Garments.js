import React from 'react';
import GarmentsSidebar from './GarmentsSidebar';

const Garments = () => {
  return (
    <div className="flex flex-row w-full ">
      {/* Sidebar */}
      <GarmentsSidebar />
      {/* Content */}
      <div>Content</div>
    </div>
  );
};

export default Garments;
